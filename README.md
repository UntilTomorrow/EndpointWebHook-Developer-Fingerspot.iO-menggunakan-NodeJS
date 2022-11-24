# Endpoint-data-menggunakan-NodeJS
Endpoint data menggunakan Node JS + MySQL dengan integrasi menggunakan produk SDK online developer.Fingerspot.iO 

# How to run
* Install Module Mysql express dan Cors , <code class="language-sh" data-lang="sh"> NPM install mysql express cors </code>

* Buka Mysql dan buat database beserta kolom yang Anda butuhkan, format data yang di kirimkan dari server adalah  , <code class="language-sh" data-lang="sh"> {"type":"attlog", "cloud_id":"XXXXXX", "data":{"pin":"1", "scan":"2020-07-21 10:11", "verify":"1", "status_scan":"1"}} </code> , pada contoh ini hanya beberapa saya ambil dari body raw tersebut , seperti Cloud ID , PIN , scan dan Verify.

* Jalankan project <code class="language-sh" data-lang="sh"> Node scan </code>

* Pastikan pada akun developer Fingerspot.IO Anda untuk endpoint sudah benar dirujukan ke file scan.js , perhatikan tampilan dibawah ini : 

![image](https://user-images.githubusercontent.com/113245217/203728704-ddad34ab-76b9-4986-aa5b-90147ea9cb26.png)

* Setiap Absensi akan realtime langsung ke database Mysql Anda yang sudah di Create tadi.

