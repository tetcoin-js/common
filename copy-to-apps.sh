#!/bin/bash

function copy_folder () {
  SRC="packages/$1/build"
  DST="../apps/node_modules/@tetcoin/$1"

  echo "** Copying $SRC to $DST"

  rm -rf $DST
  cp -r $SRC $DST
}

yarn tetcoin-dev-build-ts

copy_folder "keyring"
copy_folder "util"
copy_folder "util-crypto"
