module.exports = {
  prefix: 'fonticon',
  inputDir: './src/iconfonts', // (required)
  outputDir: './src/public/assets/font', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['css', 'html'],
  normalize: true,
  codepoints: {
    'sample': 0xf101,
  }
}

