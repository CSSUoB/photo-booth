#!/bin/bash

USERNAME=photographer
HOST=localhost
PORT=2222

CODE=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 8)

rsync $@ ${USERNAME}@${HOST}:${CODE} -e "ssh -p ${PORT}"
