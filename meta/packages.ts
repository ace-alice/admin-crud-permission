import { PackageManifest } from '@admin-crud-permission/metadata';

export const packages: PackageManifest[] = [
  {
    name: 'metadata',
    display: 'Metadata for Crud functions',
    manualImport: true,
    iife: false,
    utils: true,
    target: 'node14'
  },
  {
    name: 'vue',
    display: 'CrudVue',
    description: 'Curd of Admin Manager Vue Composition Utilities'
  },
  {
    name: 'react',
    display: 'CrudReact',
    description: 'Curd of Admin Manager React Composition Utilities'
  }
];
