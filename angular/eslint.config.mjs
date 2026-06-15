import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
 
export default tseslint.config(
  {
    ignores: ['projects/**/*']
  },
 
  {
    files: ['**/*.ts'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
 
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase'
        }
      ],
 
      '@angular-eslint/component-class-suffix': 'off',
 
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ]
    }
  },
 
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {}
  }
);