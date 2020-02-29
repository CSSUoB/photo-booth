#!/bin/bash

yarn install
yarn build

# install nginx config
cp -f deploy/nginx /etc/nginx/sites-available/default

# install site
rm -rf /var/www/html
mkdir -p /var/www/html
cp -r public/* /var/www/html

# restart nginx
systemctl restart nginx
