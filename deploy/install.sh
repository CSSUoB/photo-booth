#!/bin/bash

# setup software repositories
apt-get update
apt-get -y install curl software-properties-common

add-apt-repository -y universe
add-apt-repository -y ppa:certbot/certbot

curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

apt-get update

# install base commands
apt-get -y install nginx certbot python-certbot-nginx rssh nodejs yarn
