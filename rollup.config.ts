import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import type { OutputOptions, Plugin, RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import fs from 'node:fs';
import esbuild from 'rollup-plugin-esbuild';
// import babel from 'rollup-plugin-babel';
import type { Options as ESBuildOptions } from 'rollup-plugin-esbuild';
import { packages } from './meta/packages';
import json from '@rollup/plugin-json';
import { createRequire } from 'node:module';
const configs: RollupOptions[] = [];

function esbuildMinifer(options: ESBuildOptions) {
  const { renderChunk } = esbuild(options);

  return {
    name: 'esbuild-minifer',
    renderChunk
  };
}

const pluginEsbuild = esbuild();
const pluginDts = dts();
const pluginTs = typescript({
  tsconfig: './tsconfig.json',
  useTsconfigDeclarationDir: true
});
// const pluginBabel = babel({
//   exclude: 'node_modules/**', // 忽略 node_modules 中的文件
//   extensions: ['.js', '.jsx', '.ts', '.tsx'] // 支持的文件扩展名
// });
const pluginDel = del({ targets: 'dist' });

const externals = [
  'vue-demi',
  '@admin-crud-permission/vue',
  '@admin-crud-permission/react',
  '@admin-crud-permission/metadata'
];

const iifeName = 'AdminCrudPermission';

const require = createRequire(import.meta.url);
const VUE_DEMI_IIFE = fs.readFileSync(require.resolve('vue-demi/lib/index.iife.js'), 'utf-8');

const injectVueDemi: Plugin = {
  name: 'inject-vue-demi',
  renderChunk(code) {
    return `${VUE_DEMI_IIFE};\n;${code}`;
  }
};

for (const { globals, name, external, iife, build, cjs, mjs, dts, target = 'es2018' } of packages) {
  if (build === false) continue;
  const iifeGlobals = {
    'vue-demi': 'VueDemi',
    '@admin-crud-permission/vue': iifeName,
    '@admin-crud-permission/react': iifeName,
    ...(globals || {})
  };
  const fn = 'index';
  const input = `packages/${name}/index.ts`;
  const output: OutputOptions[] = [];
  if (mjs !== false) {
    output.push({
      file: `packages/${name}/dist/${fn}.mjs`,
      format: 'es'
    });
  }

  if (cjs !== false) {
    output.push({
      file: `packages/${name}/dist/${fn}.cjs`,
      format: 'cjs'
    });
  }

  if (iife !== false) {
    output.push(
      {
        file: `packages/${name}/dist/${fn}.iife.js`,
        format: 'iife',
        name: iifeName,
        extend: true,
        globals: iifeGlobals,
        plugins: [injectVueDemi, pluginTs, pluginDel]
      },
      {
        file: `packages/${name}/dist/${fn}.iife.min.js`,
        format: 'iife',
        name: iifeName,
        extend: true,
        globals: iifeGlobals,
        plugins: [
          injectVueDemi,
          esbuildMinifer({
            minify: true
          }),
          pluginTs,
          pluginDel
        ]
      }
    );
  }

  configs.push({
    input,
    output,
    plugins: [target ? esbuild({ target }) : pluginEsbuild, json(), pluginTs, pluginDel],
    external: [...externals, ...(external || [])]
  });

  if (dts !== false) {
    configs.push({
      input,
      output: [
        { file: `packages/${name}/dist/${fn}.d.cts` },
        { file: `packages/${name}/dist/${fn}.d.mts` },
        { file: `packages/${name}/dist/${fn}.d.ts` } // for node10 compatibility
      ],
      plugins: [pluginDts, pluginTs, pluginDel],
      external: [...externals, ...(external || [])]
    });
  }
}

export default configs;
