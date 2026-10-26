# Task App — Descripción del proyecto

## Objetivo

Desarrollar una aplicación web de gestión de tareas (To-Do App) que permita a la usuaria:

- Crear, completar y eliminar tareas
- Filtrar y buscar tareas
- Visualizar el estado de sus tareas
- Usar la aplicación en cualquier dispositivo (mobile, tablet, desktop)

El objetivo del proyecto es construir una aplicación **realista a nivel profesional**, aplicando buenas prácticas de desarrollo frontend, arquitectura de componentes y diseño responsive.

---

## Stack tecnológico

- **Framework:** React (con Vite)
- **Lenguajes:** HTML, SCSS, JavaScript (ES6+)
- **Gestión de estado:** useState (fase inicial)
- **Persistencia:** localStorage
- **Bundler:** Vite
- **Control de versiones:** Git

---

## Arquitectura de la aplicación

### Componentes principales

- `App`
- `Header`
- `TaskInput`
- `Filters`
- `TaskList`
- `TaskItem`
- `AsidePanel` (stats / actividad)
- `Footer`

---

## Modelo de datos

Cada tarea tendrá la siguiente estructura:

```js
{
  id: string,
  text: string,
  completed: boolean
}
```

---

## Estilos y metodología CSS

### Metodología BEM (obligatorio)

Se seguirá la convención:

```txt
bloque__elemento--modificador
```

Ejemplo:

```css
.task-list__item--completed
```

---

### Uso de SCSS

- Uso de **anidación (nesting)** correctamente
- Uso de **variables SCSS** para:
  - colores
  - spacing
  - tipografía

- Uso de **partials**

---

### Organización de estilos

Ejemplo:

```txt
styles/
├── base/
├── components/
├── layout/
├── utils/
```

---

### Responsive design

- Enfoque **mobile first**
- Uso de `media queries`
- Layouts:
  - Mobile → 1 columna
  - Tablet → 2 columnas
  - Desktop → 3 columnas

---

## Reglas de desarrollo

### 🔹 React

- Componentes funcionales
- Uso de hooks (useState)
- No mutar estado directamente
- Props bien definidas
- Separación clara de responsabilidades

---

### Código

- Nombres descriptivos
- Código limpio y legible
- Evitar lógica duplicada
- Funciones pequeñas y reutilizables

---

### Accesibilidad

- Uso de etiquetas semánticas (`header`, `main`, `section`, `aside`, `footer`)
- Inputs con `label`
- Botones accesibles
- Navegación funcional con teclado (básico)

---
