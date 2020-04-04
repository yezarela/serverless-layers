module.exports = {
  runtime: 'nodejs12.x',
  runtimeDir: 'nodejs',
  packageManager: 'yarn',
  dependenciesPath: './fixtures/package.json',
  compatibleRuntimes: [ 'nodejs' ],
  copyBeforeInstall: [ 'yarn.lock', 'package-lock.json' ],
  packageExclude: [ 'node_modules/**' ]
}