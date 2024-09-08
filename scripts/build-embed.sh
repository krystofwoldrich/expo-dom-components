
mkdir -pv dist/embed/ios
mkdir -pv dist/embed/android

npx expo export:embed \
  --entry-file ./index.ts \
  --config-cmd './node_modules/react-native/cli.js config' \
  --platform ios \
  --dev false \
  --reset-cache \
  --bundle-output dist/embed/ios/main.jsbundle \
  --assets-dest dist/embed/ios \
  --sourcemap-output dist/embed/ios/main.jsbundle.map \
  --minify false

npx expo export:embed \
  --entry-file ./index.ts \
  --config-cmd './node_modules/react-native/cli.js config' \
  --platform android \
  --dev false \
  --reset-cache \
  --bundle-output dist/embed/android/index.android.bundle \
  --assets-dest dist/embed/android \
  --sourcemap-output dist/embed/android/index.android.bundle.map \
  --minify false
