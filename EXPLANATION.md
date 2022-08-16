# Berikut Penjelasan UI Aplikasi ini
Pengembangan UI pada aplikasi ini dilakukan dengan menggunakan pendekatan *mobile-first*, dimana pengembang memulai pengembangannya dengan membuat UI dari layar *smartphone* terlebih dahulu, kemudian melakukan penyesuaian secara bertahap sampai pada ukuran layar komputer. Hal ini bertujuan agar pengembangan yang dilakukan bersifat *scaling up*, sehingga tidak ada kendala dalam hal responsivitas pengguna ketika menggunakan aplikasi pada layar *smartphone* hingga *desktop*.

## Navbar
![navbar untuk desktop](https://github.com/pramesywaraj/image-repository/blob/main/navbar-1.png?raw=true)
*Navbar untuk desktop*

Pada navbar terdapat navigation link dimana "Daftar Produk" untuk ke halaman daftar produk / homepage, dan untuk "Tambah Produk" akan mengarahkan pengguna ke halaman untuk menambah produk. Alasan menggunakan bentuk seperti ini, karena dapat dilihat dengan jelas dan deklaratif. Link diatas akan berwarna, seperti pada Daftar Produk, ketika sedang mengakses halaman pada link tersebut.

![navbar untuk mobile](https://github.com/pramesywaraj/image-repository/blob/main/navbar-2.png?raw=true)
*Navbar untuk mobile*

Pada bentuk mobile navigation link yang ada pada navbar versi *desktop* itu dihilangkan, karena tidak ada cukup ruang untuk meletakkannya. Sehingga, pengembang memiliki inisiatif menambahkan fungsionalitas untuk mengarahkan pengguna ke halaman daftar produk dengan cara *click/tap* logo aplikasi pada navbar, seperti web-web pada umumnya. Untuk menuju halaman tambah produk, pengembang menambahkan *floating button* pada pojok kanan bawah halaman. Seperti definisi *icon*-nya, tambah (+), pengembang berharap agar pengguna dapat langsung mengenali maksud & tujuan dari tombol tersebut.

![fab mobile](https://github.com/pramesywaraj/image-repository/blob/main/fab-add.png?raw=true)

## Layout
Ide layout yang digunakan pada aplikasi ini berasal dari salah satu *e-commerce* "hijau" Indonesia, dimana mereka menempatkan *filter* dan daftar produk secara berdampingan. Pengembangan kemudian mengadopsi bentuk *layout* seperti itu, karena dirasa akan memudahkan pengguna dalam melihat produk-produk yang tertera sekaligus melakukan *filter* tanpa harus mencari dimana fiturnya berada.

![layout desktop](https://github.com/pramesywaraj/image-repository/blob/main/full-desktop-1.png?raw=true)

Pada layar *smartphone*, layout menjadi menumpuk agar menyesuaikan dengan ukuran layar yang menyempit serta agar pengguna dapat dengan mudah mengingat fitur-fitur yang ada.

![layout mobile](https://github.com/pramesywaraj/image-repository/blob/main/full-mobile.png?raw=true)

## Search, Product List Layout, dan Filter

![search filter mobile](https://github.com/pramesywaraj/image-repository/blob/main/search_filter_1.png?raw=true)

Terdapat fitur *search* atau pencarian berdasarkan nama komoditas/produk agar pengguna dapat dengan mudah menemukan produk yang ia inginkan. Kemudian pengguna dapat mengatur tampilan daftar produk menjadi berupa *grid* (seperti pada *e-commerce* "hijau" ) atau *list* memanjang agar dapat menyesuaikan dengan preferensi pengguna, seperti pada gambar di bawah. Pengguna juga dapat melakukan filtrasi terhadap produk-produk yang ia ingin tampilkan. Tersedia filtrasi berdasarkan kota dan ukuran produk yang dapat digunakan secara bersamaan. Terdapat pula keterangan jumlah total produk yang tersedia.

*grid* (*desktop* 4 kolom, *tablet* 3 kolom, *smartphone* 2 kolom)
![grid](https://github.com/pramesywaraj/image-repository/blob/main/grid-1.png?raw=true)
*list*
![list](https://github.com/pramesywaraj/image-repository/blob/main/list-1.png?raw=true)

## Halaman Tambah Produk

Halaman tambah produk dapat diakses dengan mudah melalui navigasi link yang terdapat pada navbar (*desktop*) atau dengan menekan *floating button* dengan *icon* tambah (+) (*smartphone*). Halaman produk ini berupa sebuah *form* yang sederhana dimana terdapat bagian-bagian yang harus dilengkapi sebelum menambahkan produk baru. Dalam halaman ini pengembang menggunakan *library* dari https://github.com/eFishery/json-reactform untuk membuat struktur *form*-nya. Akan tetapi, fungsionalitas untuk menambahkan produk masih belum dapat digunakan, karena ketika pengembang melakukan percobaan untuk menambahkan data pada API yang disediakan, serta merujuk pada dokumentasi penyedia APInya (https://docs.steinhq.com/add-rows), itu gagal dan memunculkan respons *error* : `{"error": "Unable to parse range: Sheet1!1:1"}`. Sepertinya diperlukan nama *Sheet* yang digunakan pada Google Sheet yang digunakan. Tidak lupa juga ada faktor kelalaian pengembang karena kurang teliti dalam mencoba terlebih dahulu *resources* yang disediakan.

![tambah produk desktop](https://github.com/pramesywaraj/image-repository/blob/main/add-desktop.png?raw=true)
![tambah produk mobile](https://github.com/pramesywaraj/image-repository/blob/main/add-mobile.png?raw=true)

--- 
