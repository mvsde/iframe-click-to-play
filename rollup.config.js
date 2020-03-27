import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/iframe-click-to-play.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      terser()
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/iframe-click-to-play.common.js',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      babel({
        presets: ['@babel/env']
      }),
      terser()
    ]
  }
]
