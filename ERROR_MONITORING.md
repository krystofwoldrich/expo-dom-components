# How to use Sentry with Expo React DOM and API Routes

This document describes the basic of error monitoring Expo React DOM Components and Expo API Routes using `@sentry/react-native` and `@sentry/node`.

It's recommended to create separate initialization of the Sentry SDK for each environment.

## Expo React DOM

`lib/domSentry.ts` contains `Sentry.init` for Expo React DOM Components.

### Source Maps upload

In `@expo/cli@0.19.0-canary-20240904-69100c1` the production output is non-deterministic, so the uploaded artifacts must be the files generated during the native application build. Note that this is a canary version of the CLI and the behavior will likely change.

Where to find the artifacts:

```
iOS: Xcode -> Products -> (App Package) mdex.app/www.bundle
```

Using the following command you can preview the production artifacts.

```bash
mkdir -pv dist-embed/ios
mkdir -pv dist-embed/android

npx expo export:embed \
  --entry-file ./index.ts \
  --config-cmd './node_modules/react-native/cli.js config' \
  --platform ios \
  --dev false \
  --reset-cache \
  --bundle-output dist-embed/ios/main.jsbundle \
  --assets-dest dist-embed/ios \
  --sourcemap-output dist-embed/ios/main.jsbundle.map \
  --minify false

npx expo export:embed \
  --entry-file ./index.ts \
  --config-cmd './node_modules/react-native/cli.js config' \
  --platform android \
  --dev false \
  --reset-cache \
  --bundle-output dist-embed/android/index.android.bundle \
  --assets-dest dist-embed/android \
  --sourcemap-output dist-embed/android/index.android.bundle.map \
  --minify false
```

Upload them to Sentry:

```bash
SENTRY_PROJECT=sentry-project-slug \
SENTRY_ORG=sentry-org-slug \
SENTRY_AUTH_TOKEN=token \
  npx sentry-expo-upload-sourcemaps path/to/mdex.app/www.bundle

# In the future dist-embed
```

## Expo API Routes

// TODO:
