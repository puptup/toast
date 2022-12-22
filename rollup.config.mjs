import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace';


export default {
  input: './src/index.tsx',
  output: [
    {
      format: 'cjs'
    }
  ],
  plugins: [
    resolve({
      extensions: ['.tsx', '.ts']
    }),
    commonjs(),
    typescript(),
    babel({
      exclude: './node_modules/**'
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}