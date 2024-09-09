export const devServerURL = () => {
  try {
    const { scriptURL } = require('react-native').NativeModules.SourceCode;

    if (scriptURL) {
      const url = new URL(scriptURL);
      const devServerURL = `${url.protocol}//${url.hostname}:${url.port}`;
      return devServerURL;
    } else {
      return 'http://localhost:8081';
    }
  } catch (error) {
    return 'http://localhost:8081';
  }
};

export const SERVER_URL = __DEV__ ? devServerURL() : 'http://localhost:3000';
