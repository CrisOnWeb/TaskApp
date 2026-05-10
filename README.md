# TaskApp

Aplicación de gestión de tareas desarrollada con React y Vite como proyecto de práctica y aprendizaje de frontend moderno.

La app permite crear, completar, eliminar y buscar tareas, además de filtrarlas por estado. El diseño está planteado con enfoque responsive y una estructura semántica orientada a accesibilidad y buenas prácticas.

## Funcionalidades

- Crear tareas
- Marcar tareas como completadas
- Eliminar tareas
- Filtrar por:
  - Todas
  - Pendientes
  - Completadas

- Buscador de tareas
  - Ignora mayúsculas/minúsculas
  - Soporta búsquedas sin tildes

- Persistencia con Local Storage
- Diseño responsive:
  - Mobile first
  - Adaptación tablet y desktop

- Componentes reutilizables en React

---

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- SCSS
- HTML semántico

---

## Responsive Design

La interfaz cambia según el tamaño de pantalla:

- **Mobile:** diseño en una única columna centrado en la lectura rápida y la interacción táctil.
- **Tablet/Desktop:** estructura tipo dashboard con panel lateral y resumen de tareas.

---

## Accesibilidad

Se han aplicado varias prácticas básicas de accesibilidad:

- Uso de HTML semántico (`header`, `main`, `aside`, `section`)
- Labels asociados a formularios
- Inputs controlados
- Jerarquía visual clara
- Iconos decorativos ocultos para lectores de pantalla cuando corresponde

---

## Estado del proyecto

Proyecto todavía en desarrollo.

Pendientes algunas mejoras visuales y pequeños ajustes responsive, pero actualmente funcional y estable para uso básico.

---

## Cómo ejecutarlo en local

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

Instala dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

---

## Objetivo del proyecto

Este proyecto forma parte de mi proceso de aprendizaje en desarrollo web frontend y está enfocado en practicar:

- React
- gestión de estado
- componentización
- responsive design
- arquitectura básica de aplicaciones
- buenas prácticas de CSS y accesibilidad
