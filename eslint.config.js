import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Error si hay variables no usadas
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // Error si se usan solamente dos == o !=
      eqeqeq: 'error',
      // Detecta console.log para evitar que queden en producción
      'no-console': 'warn',
      // Detecta debuggers para evitar que queden en producción
      'no-debugger': 'warn',
      // Detecta cuando se usan variables antes de declararlas
      'no-use-before-define': 'warn',
      // Detecta espacios al final de la línea
      'no-trailing-spaces': 'warn',
      // Detecta más de 2 líneas vacías
      'no-multiple-empty-lines': ['warn', { max: 2 }],
      // Detecta cuando no se usan {} en condicionales
      curly: ['warn', 'multi-line', 'consistent'],
      // Detecta cuando no se usa camelCase para nombrar
      camelcase: 'warn',
      // Detecta condicionales siempre verdaderos o falsos
      'no-constant-condition': 'warn',
      // Error con código que nunca se ejecuta
      'no-unreachable': 'error',
      // Detecta cuando usas let pero no reasignas
      'prefer-const': 'warn',
      // Detecta imports duplicados
      'no-duplicate-imports': 'warn',
      // REACT
      // Error si no se usan keys en listas
      'react/jsx-key': 'error',
      // Desactiva avisos por no importar React (ya no es obligatorio hacerlo)
      'react/react-in-jsx-scope': 'off',
      // Desactiva avisos de prop-types
      'react/prop-types': 'off',
    },
  },
]);
