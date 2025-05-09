#!/usr/bin/env sh

clear

echo 'Started Bundling ..'

bun run build Background &
bun run build Sidepanel &
bun run build Content &

wait

echo 'Stopped Bundling.'