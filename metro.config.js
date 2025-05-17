const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    server: {
      port: 8088, // Cambia el puerto a 8088 o al que prefieras
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
