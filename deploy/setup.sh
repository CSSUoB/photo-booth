#!/bin/bash

# install nginx config
cp -f deploy/nginx /etc/nginx/sites-available/default

# install site
rm -rf /var/www/html
mkdir -p /var/www/html
cp -r public/* /var/www/html

# setup photos location
mkdir -p /var/www/photos

# letsencrypt
# certbot --non-interactive --nginx --redirect --domains SITE_GOES_HERE --agree-tos --register-unsafely-without-email

# restart nginx
systemctl restart nginx
