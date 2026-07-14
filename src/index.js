import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import path from 'path';
import { fileURLToPath } from 'url';

// Crear servidor
const server = express();

// Configurar servidor
if (process.env.NODE_ENV === 'development') {
  server.use(
    cors({
      origin: process.env.FRONTEND_URL,
    }),
  );
}
server.use(express.json({ limit: '25mb' }));

// Configurar servidor de archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticServerPath = path.join(__dirname, '../public');
server.use(express.static(staticServerPath));

// Arrancar servidor en un puerto
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// helpers
// Conexión con la base de datos
const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 3306,
    database: process.env.DB_NAME,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
  });

  console.log(
    `Conexión establecida con la base de datos (identificador = ${connection.threadId})`,
  );

  return connection;
};

// funciones de token
const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

const authenticateToken = (req, res, next) => {
  // Recogemos los datos
  const authHeader = req.headers['authorization'];

  // Verificamos que han enviado datos
  if (!authHeader) {
    return res
      .status(401)
      .json({ success: false, error: 'Token not provided' });
  }

  // Verificamos que la authorization tiene un formato válido
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Invalid token' });
  }

  const token = authHeader.split(' ')[1];

  // Verificamos que el token existe
  if (!token) {
    return res.status(401).json({ success: false, error: 'Invalid token' });
  }

  // Verificamos que el token es válido y no ha expirado
  const decoded = verifyToken(token);

  // Comprobamos resultado
  if (!decoded) {
    return res.status(401).json({ success: false, error: 'Invalid token' });
  }

  req.user = decoded;
  next();
};

// Endpoints
// Añadir una tarea
server.post('/api/tasks', authenticateToken, async (req, res) => {
  let connection;

  try {
    const { title, completed = false } = req.body;
    const user_id = req.user.sub;

    if (!title?.trim()) {
      return res.status(400).json({
        success: false,
        error: 'title is required',
      });
    }

    if (completed !== undefined && typeof completed !== 'boolean') {
      return res.status(400).json({
        success: false,
        error: 'completed must be a boolean',
      });
    }

    // Comprobar que la tarea no existe
    let sql = 'SELECT id FROM tasks WHERE title = ? AND user_id = ?;';

    connection = await getConnection();
    const [existingTask] = await connection.query(sql, [title.trim(), user_id]);

    if (existingTask.length > 0) {
      return res.status(409).json({
        success: false,
        error: 'Task already exists',
      });
    }

    sql = 'INSERT INTO tasks (title, user_id, completed) VALUES (?, ?, ?);';

    const [taskInserted] = await connection.execute(sql, [
      title.trim(),
      user_id,
      completed,
    ]);

    res.status(201).json({
      success: true,
      taskId: taskInserted.insertId,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Listar tareas
server.get('/api/tasks', authenticateToken, async (req, res) => {
  let connection;

  try {
    const { completed } = req.query;
    const user_id = req.user.sub;

    // Verificamos que completed es un string true/false o undefined
    if (
      completed !== undefined &&
      completed !== 'true' &&
      completed !== 'false'
    ) {
      return res.status(400).json({
        success: false,
        error: 'completed must be a boolean',
      });
    }

    // Convertimos a boolean
    const completedBoolean =
      completed === undefined ? undefined : completed === 'true';

    // Creamos query genérica por si no nos pasan queries
    let sql =
      'SELECT id, title, completed, created_at, user_id FROM tasks WHERE user_id = ?;';

    // Creamos array de params
    const params = [user_id];

    // Comprobamos si nos llega el completed en la request
    if (completed !== undefined) {
      params.push(completedBoolean);
      sql =
        'SELECT id, title, completed, created_at, user_id FROM tasks WHERE user_id = ? AND completed = ?;';
    }

    connection = await getConnection();
    const [results] = await connection.query(sql, params);

    // Convertimos completed en un boolean
    const tasks = results.map((task) => ({
      ...task,
      completed: Boolean(task.completed),
    }));

    res.status(200).json({ success: true, results: tasks });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Modificar una tarea
server.put('/api/tasks/:taskId', authenticateToken, async (req, res) => {
  let connection;

  try {
    const { taskId } = req.params;
    const user_id = req.user.sub;
    const { title, completed } = req.body;

    // Verificamos que taskId es un número
    if (Number.isNaN(Number(taskId))) {
      return res.status(400).json({
        success: false,
        error: 'taskId must be a number',
      });
    }

    // Verificamos que title exista
    if (!title?.trim()) {
      return res.status(400).json({
        success: false,
        error: 'title is required',
      });
    }

    // Verificamos que completed exista y sea boolean
    // Si no nos pasan completed -> undefined !== 'boolean por lo que ya detecta cuando falta
    if (typeof completed !== 'boolean') {
      return res.status(400).json({
        success: false,
        error: 'completed is required and must be a Boolean',
      });
    }

    // Comprobar que la tarea que se modifica no coincide con ninguna existente
    let sql =
      'SELECT id FROM tasks WHERE title = ? AND user_id = ? AND id <> ?;';

    connection = await getConnection();
    const [existingTask] = await connection.query(sql, [
      title.trim(),
      user_id,
      Number(taskId),
    ]);

    if (existingTask.length > 0) {
      return res.status(409).json({
        success: false,
        error: 'Task already exists',
      });
    }

    sql = `UPDATE tasks
                  SET title = ?, completed = ?
                  WHERE id = ? AND user_id = ?
                  LIMIT 1;`;

    const [updateResult] = await connection.execute(sql, [
      title.trim(),
      completed,
      Number(taskId),
      user_id,
    ]);

    if (updateResult.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        error: 'Task not found',
      });
    }
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Eliminar una tarea
server.delete('/api/tasks/:taskId', authenticateToken, async (req, res) => {
  let connection;

  try {
    const { taskId } = req.params;
    const user_id = req.user.sub;

    // Verificamos que taskId es un número
    if (Number.isNaN(Number(taskId))) {
      return res.status(400).json({
        success: false,
        error: 'taskId must be a number',
      });
    }

    const sql = `DELETE FROM tasks
                  WHERE id = ? AND user_id = ?
                  LIMIT 1;`;

    connection = await getConnection();
    const [deleteResult] = await connection.execute(sql, [
      Number(taskId),
      user_id,
    ]);

    if (deleteResult.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        error: 'Task not found',
      });
    }
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// signup
server.post('/api/signup', async (req, res) => {
  // validar que los datos lleguen correctamente (son obligatorios para la BD)
  if (
    !req.body?.name?.trim() ||
    !req.body?.email?.trim() ||
    !req.body?.password?.trim()
  ) {
    return res.status(400).json({
      success: false,
      error: 'Incomplete data',
    });
  }

  // Verificamos que la contraseña contenga al menos 8 caracteres
  if (req.body.password.length < 8) {
    return res.status(400).json({
      success: false,
      error: 'The password must be at least 8 characters long',
    });
  }

  // Declaramos connection para poder usarlo en try y en finally
  let connection;
  try {
    // recuperar datos del frontend
    const { name, email, password } = req.body;

    // Comprobar que el usuario existe
    let sql = 'SELECT id FROM users WHERE email = ?;';

    connection = await getConnection();
    const [userResults] = await connection.query(sql, email);

    if (userResults.length > 0) {
      return res.status(409).json({
        success: false,
        error: 'The user already exists in the database',
      });
    }

    // Crear hash de la password
    const passwordHash = await bcrypt.hash(password, 10);

    // Guardar usuario
    sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?);';

    const [registerResult] = await connection.execute(sql, [
      name,
      email,
      passwordHash,
    ]);

    // Generar token
    const payload = {
      sub: registerResult.insertId,
    };

    const token = generateToken(payload);

    res.status(201).json({
      success: true,
      userId: registerResult.insertId,
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// login
server.post('/api/login', async (req, res) => {
  // Verificamos que recibimos todos los datos
  if (!req.body?.email?.trim() || !req.body?.password?.trim()) {
    return res.status(400).json({
      success: false,
      error: 'Incomplete data',
      code: 'INCOMPLETE_DATA',
    });
  }

  let connection;

  try {
    // Recogemos los datos
    const { email, password } = req.body;

    // Verificar que el usuario existe en la base de datos
    const sql = 'SELECT id, email, password FROM users WHERE email = ?;';

    connection = await getConnection();
    const [userResult] = await connection.query(sql, [email]);

    // Comprobamos que sólo existe un resultado
    if (userResult.length !== 1) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password',
        code: 'INVALID_CREDENTIALS',
      });
    }

    // Cogemos el primer (y único) resultado
    const user = userResult[0];

    // Comparar con passwordHash para verificar contraseña
    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password',
        code: 'INVALID_CREDENTIALS',
      });
    }

    // Generar token
    const payload = {
      sub: user.id,
    };

    const token = generateToken(payload);

    // Enviar token
    res.status(200).json({
      success: true,
      userId: user.id,
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// profile
server.get('/api/profile', authenticateToken, async (req, res) => {
  let connection;

  try {
    const sql = 'SELECT id, name, email FROM users WHERE id = ?;';

    connection = await getConnection();
    const [profileResults] = await connection.query(sql, [req.user.sub]);

    const profile = profileResults[0];

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Permite que React Router gestione las rutas del frontend
// Si la ruta no es una API ni un archivo estático, devuelve index.html para que React Router gestione la navegación
server.get('/*splat', (req, res) => {
  res.sendFile(path.join(staticServerPath, 'index.html'));
});
