module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reactWebpImage',
      externals: {
        react: 'React'
      }
    }
  }
}
