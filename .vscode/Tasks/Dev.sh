#!/usr/bin/env sh

clear

echo 'Started Bundling ..'

bun run build Background &
bun run build Sidepanel &
bun run build Content-Isolated &
bun run build Content-Shared &

wait

echo 'Stopped Bundling.'