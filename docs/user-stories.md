# HISTORIAS DE USUARIA

---

## HE-1 Gestión de tareas

### HU-1 Añadir tarea

**Estado:** [✔]

COMO usuaria
QUIERO añadir una nueva tarea
PARA organizar lo que tengo que hacer

#### Tareas

- [✔] T1 Crear componente TaskInput
  **Criterios de aceptación:**
- ✔ Se muestra un input en pantalla
- ✔ Se muestra un botón para añadir tarea

- [✔] T2 Crear estado para tareas (useState)
  **Criterios de aceptación:**
- ✔ Existe un array inicial vacío
- ✔ El estado se puede actualizar

- [✔] T3 Implementar input controlado
  **Criterios de aceptación:**
- ✔ El valor del input refleja lo que se escribe
- ✔ El estado cambia al escribir

- [✔] T4 Implementar función addTask
  **Criterios de aceptación:**
- ✔ Se añade una nueva tarea al array
- ✔ Cada tarea tiene un id único
- ✔ La tarea aparece en la lista

- [✔] T5 Limpiar input tras añadir tarea
  **Criterios de aceptación:**
- ✔ El input queda vacío tras añadir tarea

- [✔] T6 Validar input vacío
  **Criterios de aceptación:**
- ✔ No se añade tarea si está vacío
- ✔ No se rompe la aplicación

---

### HU-2 Completar tarea

**Estado:** [✔]

COMO usuaria
QUIERO marcar una tarea como completada
PARA saber qué tareas he terminado

#### Tareas

- [✔] T7 Añadir propiedad "completed" a cada tarea
  **Criterios de aceptación:**
- ✔ Cada tarea tiene propiedad completed
- ✔ Valor inicial es false

- [✔] T8 Implementar checkbox en TaskItem
  **Criterios de aceptación:**
- ✔ Cada tarea tiene checkbox visible
- ✔ El checkbox refleja el estado

- [✔] T9 Crear función toggleTask
  **Criterios de aceptación:**
- ✔ El estado cambia al hacer click
- ✔ Alterna entre true/false

- [✔] T10 Actualizar estado sin mutar
  **Criterios de aceptación:**
- ✔ No se modifica el array original
- ✔ React detecta el cambio

- [✔] T11 Aplicar estilos de tarea completada
  **Criterios de aceptación:**
- ✔ Tareas completadas tienen estilo distinto
- ✔ Se diferencian claramente

---

### HU-3 Eliminar tarea

**Estado:** [✔]

COMO usuaria
QUIERO eliminar una tarea
PARA mantener mi lista limpia

#### Tareas

- [✔] T12 Añadir botón eliminar en TaskItem
  **Criterios de aceptación:**
- ✔ Cada tarea tiene botón visible
- ✔ El botón es clicable

- [✔] T13 Crear función deleteTask
  **Criterios de aceptación:**
- ✔ Se elimina la tarea correcta
- ✔ No afecta a otras tareas

- [✔] T14 Filtrar tarea por id
  **Criterios de aceptación:**
- ✔ La tarea desaparece de la lista
- ✔ El estado se actualiza

---

## HE-2 Organización y filtrado

### HU-4 Ver tareas pendientes

**Estado:** [✔]

COMO usuaria
QUIERO ver solo las tareas pendientes
PARA centrarme en lo importante

#### Tareas

- [✔] T15 Crear estado "filter"
  **Criterios de aceptación:**
- ✔ El estado tiene valor por defecto
- ✔ Se puede actualizar

- [✔] T16 Definir valor "pending"
  **Criterios de aceptación:**
- ✔ Existe opción "pending"

- [✔] T17 Filtrar tareas pendientes
  **Criterios de aceptación:**
- ✔ Solo se muestran tareas no completadas

- [✔] T18 Mostrar lista filtrada
  **Criterios de aceptación:**
- ✔ La UI refleja el filtro seleccionado

---

### HU-5 Ver tareas completadas

**Estado:** [✔]

COMO usuaria
QUIERO ver las tareas completadas
PARA revisar lo que ya he hecho

#### Tareas

- [✔] T19 Reutilizar estado "filter"
  **Criterios de aceptación:**
- ✔ No se crea estado duplicado

- [✔] T20 Definir valor "completed"
  **Criterios de aceptación:**
- ✔ Existe opción "completed"

- [✔] T21 Filtrar tareas completadas
  **Criterios de aceptación:**
- ✔ Solo se muestran tareas completadas

- [✔] T22 Mostrar lista filtrada
  **Criterios de aceptación:**
- ✔ Se muestran correctamente en UI

---

### HU-6 Buscar tareas

**Estado:** [✔]

COMO usuaria
QUIERO buscar tareas por texto
PARA encontrarlas rápidamente

#### Tareas

- [✔] T23 Crear estado "search"
  **Criterios de aceptación:**
- ✔ El estado guarda texto

- [✔] T24 Implementar input de búsqueda
  **Criterios de aceptación:**
- ✔ Se puede escribir texto
- ✔ El valor se actualiza

- [✔] T25 Filtrar tareas por texto (includes)
  **Criterios de aceptación:**
- ✔ Se muestran tareas que coinciden
- ✔ No distingue mayúsculas/minúsculas (recomendado)

- [✔] T26 Combinar filtros + búsqueda
  **Criterios de aceptación:**
- ✔ Se aplican filtro + búsqueda a la vez

---

## HE-3 Experiencia de usuario

### HU-7 Diferenciar tareas completadas

**Estado:** [✔]

COMO usuaria
QUIERO ver claramente qué tareas están completadas
PARA diferenciarlas visualmente

#### Tareas

- [✔] T27 Aplicar estilo tachado
  **Criterios de aceptación:**
- ✔ Texto aparece tachado

- [✔] T28 Cambiar color/opacity de tareas completadas
  **Criterios de aceptación:**
- ✔ Texto aparece tachado

---

### HU-8 Feedback de acciones

**Estado:** [ ] pendiente

COMO usuaria
QUIERO recibir feedback al añadir o eliminar tareas
PARA saber que la acción se ha realizado correctamente

#### Tareas

- [ ] T29 Mostrar mensaje al añadir tarea
      **Criterios de aceptación:**
- ✔ Se muestra feedback al añadir

- [ ] T30 Mostrar mensaje al eliminar tarea
      **Criterios de aceptación:**
- ✔ Se muestra feedback al eliminar

- [ ] T31 Implementar feedback visual (ej: animación o toast)
      **Criterios de aceptación:**
- ✔ El usuario percibe la acción

---

### HU-9 Ver contador de tareas

**Estado:** [ ] pendiente

COMO usuaria
QUIERO ver un contador de tareas
PARA tener una visión general de mi progreso

#### Tareas

- [ ] T32 Calcular número total de tareas
      **Criterios de aceptación:**
- ✔ Número correcto

- [ ] T33 Calcular tareas completadas
      **Criterios de aceptación:**
- ✔ Número correcto

- [ ] T34 Mostrar contador en UI
      **Criterios de aceptación:**
- ✔ Se muestra en UI
- ✔ Se actualiza dinámicamente

---

## HE-4 Persistencia de datos

### HU-10 Guardar tareas automáticamente

**Estado:** [✔]

COMO usuaria
QUIERO que mis tareas se guarden automáticamente
PARA no perderlas al cerrar la aplicación

#### Tareas

- [✔] T35 Guardar tareas en localStorage
  **Criterios de aceptación:**
- ✔ Los datos se guardan en navegador

- [✔] T36 Cargar tareas al iniciar la app
  **Criterios de aceptación:**
- ✔ Las tareas se cargan al iniciar

- [✔] T37 Sincronizar estado con localStorage
  **Criterios de aceptación:**
- ✔ Cambios se reflejan automáticamente

---

## HE-5 Responsive design

### HU-11 Uso en móvil

**Estado:** [ ] pendiente

COMO usuaria
QUIERO poder usar la app en móvil
PARA gestionar mis tareas en cualquier lugar

#### Tareas

- [✔] T38 Crear layout mobile (columna)
  **Criterios de aceptación:**
- ✔ Todo se muestra en una columna
- ✔ Es usable en pantalla pequeña

- [ ] T39 Ajustar spacing y tipografía mobile
      **Criterios de aceptación:**
- ✔ Texto legible
- ✔ Botones accesibles

---

### HU-12 Adaptación a tablet y desktop

**Estado:** [ ] pendiente

COMO usuaria
QUIERO una interfaz adaptada a tablet y desktop
PARA tener una mejor experiencia en pantallas grandes

#### Tareas

- [ ] T40 Implementar layout tablet (2 columnas)
      **Criterios de aceptación:**
- ✔ Sidebar + contenido visible

- [ ] T41 Implementar layout desktop (3 columnas)
      **Criterios de aceptación:**
- ✔ Sidebar + main + panel

- [ ] T42 Adaptar filtros a sidebar
      **Criterios de aceptación:**
- ✔ Filtros visibles lateralmente

- [ ] T43 Ajustar spacing y jerarquía visual
      **Criterios de aceptación:**
- ✔ Diseño claro y organizado
- ✔ Buena separación visual
