#!/bin/bash

echo "Masukkan Username untuk akun SSH baru:"
read user

echo "Masukkan Password untuk akun SSH baru:"
read -s pass

# Buat akun SSH baru
useradd -m -s /bin/bash "$user"
echo "$user:$pass" | chpasswd

# Menampilkan detail akun SSH
echo "Akun SSH berhasil dibuat:"
echo "Username: $user"
echo "Password: $pass"
