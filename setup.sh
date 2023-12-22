#!/bin/bash

if [[ $EUID == 0 ]]; then
    echo "This script must NOT be run as root or with sudo privileges."
    exit 1
fi

# Set Theme

rm -rf ~/.icons
rm -rf ~/.themes
#rm -rf ~/.fonts

wget https://github.com/ful1e5/Google_Cursor/releases/download/v2.0.0/GoogleDot-Black.tar.gz
wget https://github.com/EliverLara/candy-icons/archive/refs/heads/master.zip
wget https://github.com/EliverLara/Sweet/releases/download/v3.0/Sweet-Dark-v40.zip
#wget 

tar -xf GoogleDot-Black.tar.gz
unzip master.zip
unzip Sweet-Dark-v40.zip

rm -rf GoogleDot-Black.tar.gz master.zip Sweet-Dark-v40.zip

mkdir ~/.icons ~/.themes
mv GoogleDot-Black ~/.icons/GoogleDot
mv candy-icons-master ~/.icons/candy
mv Sweet-Dark-v40 ~/.themes/Sweet-Dark

gsettings set org.gnome.desktop.interface cursor-theme GoogleDot

gsettings set org.gnome.desktop.interface icon-theme candy

gsettings set org.gnome.desktop.interface gtk-theme Sweet-Dark
gsettings set org.gnome.desktop.wm.preferences theme Sweet-Dark

gsettings set org.gnome.desktop.wm.preferences button-layout ":minimize,maximize,close"

# Install basic apps

sudo apt install -y neovim build-essential curl git

curl -sS https://download.spotify.com/debian/pubkey_7A3A762FAFD4A51F.gpg | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update && sudo apt-get install -y spotify-client

wget https://github.com/VSCodium/vscodium/releases/download/1.85.1.23348/codium_1.85.1.23348_amd64.deb
sudo dpkg -i codium_1.85.1.23348_amd64.deb

echo ""
echo "My Preferred ToDo:"
echo "Install Jetbrains Tools: https://www.jetbrains.com/toolbox-app"
echo "Install Discord: https://discord.com/"
echo "Set Custom Font: https://fonts.google.com/specimen/Ubuntu"
