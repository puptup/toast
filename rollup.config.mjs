import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace';

export default {
  input: './src/index.tsx',
  output: [
    {
      format: 'es'
    }
  ],
  plugins: [
    resolve({
      extensions: ['.tsx', '.ts']
    }),
    commonjs(),
    typescript({
      typescript: require('ttypescript'),
      tsconfigDefaults: {
        compilerOptions: {
          outDir: './build',
          plugins: [
            { "transform": "typescript-transform-paths" },
            { "transform": "typescript-transform-paths", "afterDeclarations": true }
          ],
        }}
      }),
    babel({
      exclude: './node_modules/**'
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]
}