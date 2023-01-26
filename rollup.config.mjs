import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import external from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: 'esm',
      }
    ],
    plugins: [
      resolve(),
      external({includeDependencies: true}),
      commonjs(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      typescript({
        typescript: require('ttypescript'),
        tsconfigDefaults: {
          compilerOptions: {
            plugins: [
              { "transform": "typescript-transform-paths" },
              { "transform": "typescript-transform-paths", "afterDeclarations": true }
            ],
          }}
      }),
      terser()
    ]
  }
]
