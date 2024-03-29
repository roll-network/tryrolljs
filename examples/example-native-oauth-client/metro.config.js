/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path')

const extraNodeModules = {
  crypto: require.resolve('react-native-crypto'),
  stream: require.resolve('stream-browserify'),
  https: require.resolve('https-browserify'),
  http: require.resolve('http-browserify'),
  open: require.resolve('noop3'),
  fs: require.resolve('noop3'),
  path: require.resolve('noop3'),
  child_process: require.resolve('noop3'),
  os: require.resolve('noop3'),
  net: require.resolve('noop3'),
  zlib: require.resolve('noop3'),
}

const nodeModulesPaths = [
  path.resolve(path.join(__dirname, '../../node_modules')),
]

const watchFolders = [
  ...nodeModulesPaths,
  path.resolve(__dirname, '../../packages/api'),
  path.resolve(__dirname, '../../packages/api-client'),
  path.resolve(__dirname, '../../packages/design-system'),
  path.resolve(__dirname, '../../packages/session-manager'),
  path.resolve(__dirname, '../../packages/auth-sdk'),
]

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    nodeModulesPaths,
  },
  watchFolders,
}
