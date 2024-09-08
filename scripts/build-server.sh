
mkdir -p dist/runner

npx tsc -p tsconfig.server.json

npx sentry-cli sourcemaps inject dist/runner dist/server

mkdir -p dist/server/_expo/assets/db/
cp -R assets/db/. dist/server/_expo/assets/db/
