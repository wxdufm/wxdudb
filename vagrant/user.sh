#!/usr/bin/env bash

curl https://raw.github.com/creationix/nvm/master/install.sh | sh
. ~/.profile
nvm install 0.10.22
nvm alias default 0.10.22

ln -s /vagrant vagrant
