module.exports = [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/iframe-click-to-play.esm.js',
      format: 'esm'
    }
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/iframe-click-to-play.common.js',
      format: 'cjs'
    }
  }
]
