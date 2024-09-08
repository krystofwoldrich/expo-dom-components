if (process?.env?.USE_SENTRY_IN_DEV_SERVER === "true") {
  require("./lib/sentry/server");
}

const {
  getSentryExpoConfig
} = require("@sentry/react-native/metro");

const config = getSentryExpoConfig(__dirname);

config.resolver.sourceExts.push("md", "mdx");

config.transformer.babelTransformerPath = require.resolve(
  "./metro.transformer.js"
);

module.exports = config;
