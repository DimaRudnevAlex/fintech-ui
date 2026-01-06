import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      'react/no-children-prop': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React / Next
            ['^react', '^next'],

            // NPM пакеты
            ['^@?\\w'],

            // Pages
            ['^@/\\(pages\\)'],

            // Shared
            ['^@/\\(shared\\)'],

            // Core
            ['^@/\\(core\\)'],

            // Entities
            ['^@/\\(entities\\)'],

            // Остальные alias
            ['^@/'],

            // Относительные
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./'],

            // Стили
            ['^.+\\.s?css$'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',

      'import/no-unresolved': 'error',
      'import/order': 'off',
      'sort-imports': 'off',
    },
  },

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
