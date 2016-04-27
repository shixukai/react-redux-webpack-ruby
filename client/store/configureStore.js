if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prd');
} else {
  module.exports = require('./configureStore.dev');
}
