#!/bin/bash

# setup photos user
useradd -m -d /var/www/photos -s /usr/bin/rssh photographer
cp deploy/rssh.conf /etc/rssh.conf

# letsencrypt
# certbot --non-interactive --nginx --redirect --domains SITE_GOES_HERE --agree-tos --register-unsafely-without-email
