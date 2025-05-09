#!/usr/bin/env sh

bun build                                           \
    --tsconfig-override Source/$1/tsconfig.json     \
    --outfile "Bundle/Scripts/$1.js"                \
    --watch                                         \
    --minify                                        \
    "Source/$1/mod.ts"