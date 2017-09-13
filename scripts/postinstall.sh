#/bin/bash

echo 'postinstall.sh starting'

if [ -e ".cache-require-paths.json" ]; then
  rm .cache-require-paths.json
fi

if [ ! -e "node_modules/~" ]; then
  echo 'creating wavy symlink'
  ln -sf ../ node_modules/~
fi

echo 'postinstall.sh done'
