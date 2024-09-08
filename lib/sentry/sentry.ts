if (process.env.EXPO_OS === 'web') {
  require('./dom').init();
} else if (['ios', 'android'].includes(process.env.EXPO_OS || '')) {
  require('./mobile').init();
} else if (!!process.env.EXPO_DEV_SERVER_ORIGIN ) {
  require('./server').init();
}
