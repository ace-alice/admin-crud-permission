import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import babel from 'rollup-plugin-babel';
const configs = [];

function esbuildMinifer(options) {
  const { renderChunk } = esbuild(options);

  return {
    name: 'esbuild-minifer',
    renderChunk
  };
}

const config = {
  // 入口文件
  input: 'src/index.ts',
  // 分别输出commonjs和ESModule
  output: [],
  // 使用del插件删除dist目录下的文件
  plugins: [
    dts(),
    esbuild(),
    del({ targets: 'dist' }),
    // 使用typescript插件编译文件，tsconfig参数可省略，默认读取根目录tsconfig.json
    // useTsconfigDeclarationDir 表示读取tsconfig的declarationDir配置，如果是false会和js文件同一级目录输出
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true
    }),
    babel({
      exclude: 'node_modules/**', // 忽略 node_modules 中的文件
      extensions: ['.js', '.jsx', '.ts', '.tsx'] // 支持的文件扩展名
    })
  ]
};

configs.push(config);

export default configs;
