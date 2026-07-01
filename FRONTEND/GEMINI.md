# Proyecto web: Nombre del proyecto

Este es un proyecto web con HTML, CSS y React.

## Stack Tecnológico

- **Framework:** React (con Vite)
- **Lenguajes:** HTML semántico, SCSS, JavaScript (ES6+)
- **Gestión de estado:** useState (fase inicial)
- **Persistencia:** localStorage
- **Bundler:** Vite
- **Control de versiones:** Git

## Estilo de Código

- Indentar con 2 espacios (no tabs)
- Clases CSS en kebab-case (ej: `mi-componente`, `btn-primario`)
- Variables y funciones JavaScript en camelCase (ej: `miVariable`, `mostrarModal`)
- Preferir `const` y `let` sobre `var`
- No usar clases en JS
- Usar funciones flecha cuando sea posible
- Añadir comentarios solo donde la lógica no sea obvia y siempre en español

## Estructura del Proyecto

- **index.html:** Página principal
- **src/styles/App.scss:** Hoja de estilos principal
- **src/components/App.jsx:** Lógica JavaScript principal
- **assets/img/:** Imágenes (nunca referenciar con rutas absolutas)

## Convenciones de Maquetación

- Uso de partials
- Uso de variables para colores, spacing y tipografía
- Uso de anidación (nesting) correctamente
- Usar flexbox para layouts de una dimensión (filas o columnas)
- Usar grid para layouts de dos dimensiones (rejillas)
- Evitar posicionamiento absoluto salvo casos muy específicos
- Diseño mobile-first: las media queries amplían, no reducen

## Convenciones de Programación

- No se usa `async/await` ni clases de JavaScript
- Nunca usar `var`; solo `const` y `let`
- Usa nombres de variables JavaScript en inglés, que sean sustantivos que representen el contenido
- Funciones pequeñas y reutilizables
- Componentes funcionales
- Uso de hooks
- No mutar estado directamente
- Props bien definidas
- Separación clara de responsabilidades

## Accesibilidad

- Botones accesibles
- Navegación funcional con teclado

## Reglas Importantes

- **NUNCA** usar `style=""` en línea en el HTML
- **NUNCA** usar `innerHTML` para insertar contenido dinámico (riesgo XSS)
- Uso de BEM para clases HTML y consistencia en nombres
- Todas las imágenes deben tener atributo `alt` descriptivo
- Los campos de formulario deben tener su `<label>` asociado
- Mantener HTML semántico: usar `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>` adecuadamente

## Restricciones

- No usar frameworks CSS (Bootstrap, Tailwind, etc.)
- No usar TypeScript
- No usar librerías externas para estado
- No usar backend (solo localStorage)
- No implementar features no definidas en las historias de usuaria
