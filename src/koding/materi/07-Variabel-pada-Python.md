---
title: 07. Variabel pada Python
layout: learning.njk
order: 4
permalink: "/koding/variabel-pada-python/"
---

# Variabel pada Python

Pada materi ini, peserta didik akan mempelajari konsep variabel secara lebih mendalam. Materi dimulai dari pengertian variabel, cara kerja variabel, cara membuat dan memberikan nilai, aturan penamaan, perubahan nilai, penggunaan variabel dengan berbagai tipe data, hingga penggunaan variabel bersama `input()`, operasi matematika, dan f-string.

Variabel merupakan salah satu konsep yang sangat penting dalam pemrograman. Hampir setiap program membutuhkan variabel untuk menyimpan informasi yang akan digunakan selama program berjalan.

---

## Tujuan Pembelajaran

Setelah mempelajari materi ini, peserta didik diharapkan mampu:

1. Menjelaskan pengertian variabel pada bahasa pemrograman Python.

2. Menjelaskan fungsi variabel dalam sebuah program.

3. Membuat variabel dan memberikan nilai kepada variabel.

4. Menjelaskan hubungan antara variabel dan tipe data.

5. Menggunakan variabel untuk menyimpan data.

6. Mengubah nilai yang tersimpan dalam variabel.

7. Menjelaskan dan menerapkan aturan penamaan variabel.

8. Menggunakan variabel dalam operasi matematika.

9. Menggunakan variabel untuk menerima input dari pengguna.

10. Menampilkan isi variabel menggunakan `print()` dan f-string.

11. Mengidentifikasi kesalahan sederhana dalam penggunaan variabel.

---

## Apa Itu Variabel?

<img src="/portal-pembelajaran/assets/images/koding/9-variabel-pada-python.webp" alt="Variabel pada Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Variabel adalah nama yang digunakan untuk menyimpan atau merujuk pada sebuah nilai atau data di dalam program.

Sederhananya, variabel dapat dianggap sebagai **tempat untuk menyimpan informasi** yang diberi nama agar informasi tersebut mudah digunakan kembali.

Dalam kehidupan sehari-hari, kita dapat membayangkan sebuah kotak yang diberi label.

Misalnya terdapat kotak dengan label:

```text
NAMA
```

Kemudian di dalam kotak tersebut kita menyimpan:

```text
Budi
```

Dalam Python, konsep tersebut dapat ditulis:

```python
nama = "Budi"
```

Artinya, kita membuat sebuah variabel bernama `nama` dan memberikan nilai `"Budi"` kepadanya.

Contoh lainnya:

```python
umur = 17
```

Artinya, variabel `umur` menyimpan nilai `17`.

Secara sederhana dapat digambarkan:

```text
nama  ─────────► "Budi"
umur  ─────────► 17
kelas ─────────► "X-A"
```

Dengan adanya variabel, program tidak perlu menuliskan nilai yang sama berulang-ulang. Program cukup menggunakan nama variabelnya.

---

## Mengapa Variabel Dibutuhkan?

Bayangkan sebuah program yang harus menggunakan nama siswa berkali-kali.

Tanpa variabel:

```python
print("Budi")
print("Selamat datang Budi")
print("Budi sedang belajar Python")
```

Nama `"Budi"` harus ditulis berulang kali.

Dengan variabel:

```python
nama = "Budi"

print(nama)
print("Selamat datang", nama)
print(nama, "sedang belajar Python")
```

Hasilnya tetap dapat digunakan untuk kebutuhan yang sama, tetapi program menjadi lebih mudah dikelola.

Keuntungan menggunakan variabel antara lain:

- Menyimpan data yang akan digunakan kembali.
- Membuat program lebih mudah dibaca.
- Memudahkan perubahan data.
- Mengurangi penulisan data yang berulang.
- Memudahkan proses perhitungan dan pengolahan data.
- Membantu program menjadi lebih fleksibel.

Misalnya nama siswa berubah dari `"Budi"` menjadi `"Andi"`.

Kita cukup mengubah:

```python
nama = "Andi"
```

Kode lainnya tetap dapat menggunakan variabel `nama`.

---

## Membuat Variabel

Membuat variabel pada Python sangat sederhana.

Bentuk umum:

```python
nama_variabel = nilai
```

Contoh:

```python
nama = "Budi"
umur = 17
tinggi = 165.5
```

Pada Python, kita tidak perlu menuliskan tipe data ketika membuat variabel.

Python akan menentukan tipe data berdasarkan nilai yang diberikan.

Contoh:

```python
nama = "Budi"
```

Python mengetahui bahwa `"Budi"` merupakan teks sehingga `nama` memiliki tipe data `str`.

Sedangkan:

```python
umur = 17
```

Python mengetahui bahwa `17` merupakan bilangan bulat sehingga `umur` memiliki tipe data `int`.

---

## Memahami Tanda `=`

Tanda `=` pada saat membuat variabel digunakan untuk **memberikan nilai** kepada variabel.

Contoh:

```python
nilai = 90
```

Cara membacanya dapat dipahami sebagai:

> Variabel `nilai` diberi nilai `90`.

Contoh lainnya:

```python
nama = "Budi"
kelas = "X-A"
```

Artinya:

- `nama` diberi nilai `"Budi"`.
- `kelas` diberi nilai `"X-A"`.

Tanda `=` dalam konteks pemberian nilai berbeda dengan operator perbandingan yang akan dipelajari pada materi berikutnya.

---

## Variabel Menyimpan Berbagai Jenis Data

Sebuah variabel dapat menyimpan berbagai jenis data.

Contoh:

```python
nama = "Budi"
umur = 17
tinggi = 165.5
siswa_aktif = True
```

Pada contoh tersebut:

- `nama` menyimpan teks.
- `umur` menyimpan bilangan bulat.
- `tinggi` menyimpan bilangan desimal.
- `siswa_aktif` menyimpan nilai benar atau salah.

Tipe data dari variabel mengikuti nilai yang diberikan kepadanya.

Hal ini berkaitan dengan materi sebelumnya tentang tipe data dasar Python.

---

## Hubungan Variabel dengan Tipe Data

Variabel dan tipe data merupakan dua konsep yang saling berkaitan.

Variabel memberikan **nama** kepada data, sedangkan tipe data menunjukkan **jenis data** yang disimpan.

Contoh:

```python
nama = "Budi"
```

`nama` adalah variabel.

`"Budi"` adalah nilai.

`str` adalah tipe data dari nilai tersebut.

Contoh lainnya:

```python
umur = 17
```

`umur` adalah variabel.

`17` adalah nilai.

`int` adalah tipe data dari nilai tersebut.

Dapat digambarkan:

```text
Variabel       Nilai          Tipe Data

nama     ───►  "Budi"    ───► str
umur     ───►  17         ───► int
tinggi   ───►  165.5      ───► float
aktif    ───►  True        ───► bool
```

---

## Menampilkan Nilai Variabel

Untuk menampilkan nilai yang disimpan dalam variabel, kita dapat menggunakan fungsi `print()`.

Contoh:

```python
nama = "Budi"
umur = 17

print(nama)
print(umur)
```

Output:

```text
Budi
17
```

Python mengambil nilai yang tersimpan pada variabel kemudian menampilkannya.

Kita juga dapat memberikan keterangan:

```python
nama = "Budi"
umur = 17

print("Nama:", nama)
print("Umur:", umur)
```

Output:

```text
Nama: Budi
Umur: 17
```

Cara tersebut sering digunakan ketika membuat program yang menampilkan informasi kepada pengguna.

---

## Variabel Dapat Digunakan Berkali-kali

Salah satu keuntungan variabel adalah nilainya dapat digunakan berkali-kali.

Contoh:

```python
nama = "Budi"

print(nama)
print(nama)
print(nama)
```

Output:

```text
Budi
Budi
Budi
```

Kita tidak perlu menuliskan `"Budi"` setiap kali ingin menggunakan data tersebut.

Cukup gunakan nama variabel:

```python
nama
```

---

## Mengubah Nilai Variabel

Nilai sebuah variabel dapat diubah setelah variabel dibuat.

Contoh:

```python
umur = 16

print(umur)

umur = 17

print(umur)
```

Output:

```text
16
17
```

Pada awalnya `umur` menyimpan nilai `16`.

Kemudian kita memberikan nilai baru:

```python
umur = 17
```

Setelah itu, nilai yang digunakan oleh variabel `umur` adalah `17`.

Contoh lainnya:

```python
nilai = 70

print(nilai)

nilai = 85

print(nilai)
```

Output:

```text
70
85
```

Perubahan nilai variabel sangat berguna dalam program yang datanya dapat berubah selama program berjalan.

---

## Variabel Dapat Berubah Tipe Data

Dalam Python, sebuah nama variabel dapat diberi nilai dengan tipe data yang berbeda pada waktu yang berbeda.

Contoh:

```python
data = 10

print(data)
print(type(data))

data = "Sepuluh"

print(data)
print(type(data))
```

Output:

```text
10
<class 'int'>
Sepuluh
<class 'str'>
```

Pada awalnya `data` menyimpan bilangan `10`.

Kemudian `data` diberi nilai teks `"Sepuluh"`.

Walaupun Python memungkinkan hal tersebut, dalam membuat program sebaiknya penggunaan variabel tetap konsisten agar kode lebih mudah dipahami.

---

## Aturan Penamaan Variabel

Python memiliki aturan yang harus diperhatikan ketika membuat nama variabel.

Nama variabel:

1. Tidak boleh diawali dengan angka.

2. Tidak boleh menggunakan spasi.

3. Tidak boleh menggunakan kata kunci Python.

4. Dapat menggunakan huruf.

5. Dapat menggunakan angka selama bukan karakter pertama.

6. Dapat menggunakan garis bawah (`_`).

7. Bersifat case-sensitive.

Contoh nama variabel yang benar:

```python
nama = "Budi"
umur = 17
nilai1 = 90
nama_siswa = "Budi"
tinggi_badan = 165.5
```

---

## Nama Variabel Tidak Boleh Diawali Angka

Contoh yang salah:

```python
1nama = "Budi"
```

Kode tersebut tidak dapat digunakan karena nama variabel diawali angka.

Contoh yang benar:

```python
nama1 = "Budi"
```

Angka boleh digunakan selama tidak menjadi karakter pertama.

Contoh:

```python
nilai1 = 90
nilai2 = 85
nilai3 = 88
```

---

## Nama Variabel Tidak Boleh Menggunakan Spasi

Contoh yang salah:

```python
nama siswa = "Budi"
```

Python akan menganggap spasi sebagai pemisah sehingga penulisan tersebut tidak valid.

Gunakan garis bawah:

```python
nama_siswa = "Budi"
```

Contoh lainnya:

```python
nama_lengkap = "Budi Santoso"
jumlah_siswa = 32
nilai_matematika = 90
```

---

## Python Bersifat Case-Sensitive

Python membedakan huruf besar dan huruf kecil.

Perhatikan:

```python
nama = "Budi"
Nama = "Andi"
NAMA = "Citra"
```

Ketiga variabel tersebut berbeda.

Contoh:

```python
nama = "Budi"
Nama = "Andi"

print(nama)
print(Nama)
```

Output:

```text
Budi
Andi
```

Karena Python membedakan huruf besar dan kecil, sebaiknya gunakan penamaan variabel secara konsisten.

---

## Nama Variabel yang Sebaiknya Digunakan

Nama variabel sebaiknya menjelaskan data yang disimpan.

Contoh:

```python
nama_siswa = "Budi"
umur_siswa = 17
nilai_matematika = 90
jumlah_siswa = 32
```

Nama tersebut lebih mudah dipahami daripada:

```python
a = "Budi"
b = 17
c = 90
d = 32
```

Walaupun keduanya dapat digunakan, nama yang jelas membuat program lebih mudah dibaca dan dipelihara.

---

## Konvensi Penamaan dengan Snake Case

Untuk nama variabel yang terdiri dari beberapa kata, Python sering menggunakan gaya penamaan **snake_case**.

Dalam snake_case, setiap kata dipisahkan dengan garis bawah.

Contoh:

```python
nama_lengkap = "Budi Santoso"
tanggal_lahir = "10 Januari 2010"
nilai_akhir = 90
jumlah_siswa = 35
```

Gaya ini membuat nama variabel lebih mudah dibaca.

---

## Menggunakan Variabel dalam Operasi Matematika

Variabel dapat digunakan dalam operasi matematika.

Contoh:

```python
a = 10
b = 5

hasil = a + b

print(hasil)
```

Output:

```text
15
```

Python mengambil nilai `a`, yaitu `10`, kemudian mengambil nilai `b`, yaitu `5`, lalu menjumlahkannya.

Hasil perhitungan disimpan dalam variabel `hasil`.

---

## Operator Matematika pada Variabel

Variabel dapat digunakan dengan berbagai operator matematika.

| Operator | Fungsi | Contoh |
|---|---|---|
| `+` | Penjumlahan | `a + b` |
| `-` | Pengurangan | `a - b` |
| `*` | Perkalian | `a * b` |
| `/` | Pembagian | `a / b` |
| `//` | Pembagian bulat | `a // b` |
| `%` | Sisa pembagian | `a % b` |
| `**` | Pangkat | `a ** b` |

Contoh:

```python
a = 10
b = 3

print("Penjumlahan:", a + b)
print("Pengurangan:", a - b)
print("Perkalian:", a * b)
print("Pembagian:", a / b)
print("Pembagian bulat:", a // b)
print("Sisa pembagian:", a % b)
print("Pangkat:", a ** b)
```

---

## Contoh Menghitung Luas Persegi Panjang

Variabel sangat berguna dalam perhitungan.

Rumus luas persegi panjang:

```text
Luas = panjang × lebar
```

Dalam Python:

```python
panjang = 15
lebar = 8

luas = panjang * lebar

print("Panjang =", panjang)
print("Lebar   =", lebar)
print("Luas    =", luas)
```

Output:

```text
Panjang = 15
Lebar   = 8
Luas    = 120
```

Variabel `panjang` dan `lebar` menyimpan data yang diperlukan untuk perhitungan.

Variabel `luas` menyimpan hasil perhitungan.

---

## Contoh Menghitung Rata-Rata Nilai

Variabel juga dapat digunakan untuk menghitung rata-rata nilai siswa.

```python
nilai1 = 80
nilai2 = 85
nilai3 = 90

rata_rata = (nilai1 + nilai2 + nilai3) / 3

print("Nilai 1   :", nilai1)
print("Nilai 2   :", nilai2)
print("Nilai 3   :", nilai3)
print("Rata-rata :", rata_rata)
```

Output:

```text
Nilai 1   : 80
Nilai 2   : 85
Nilai 3   : 90
Rata-rata : 85.0
```

Program tersebut menunjukkan bahwa variabel dapat digunakan untuk menyimpan data sekaligus hasil pengolahan data.

---

## Menggabungkan Variabel String

Variabel yang berisi teks dapat digabungkan menggunakan operator `+`.

Contoh:

```python
nama_depan = "Budi"
nama_belakang = "Santoso"

nama_lengkap = nama_depan + " " + nama_belakang

print(nama_lengkap)
```

Output:

```text
Budi Santoso
```

Tanda `" "` digunakan untuk memberikan spasi di antara kedua teks.

---

## Menampilkan Variabel dengan f-string

Python menyediakan **f-string** untuk memudahkan penggabungan teks dengan variabel.

Contoh:

```python
nama = "Budi"
umur = 17

print(f"Nama saya {nama}")
print(f"Umur saya {umur} tahun")
```

Output:

```text
Nama saya Budi
Umur saya 17 tahun
```

Pada f-string, variabel ditulis di dalam tanda kurung kurawal `{}`.

Contoh:

```python
nama = "Budi"
kelas = "X-A"
nilai = 90

print(f"{nama} adalah siswa kelas {kelas} dengan nilai {nilai}.")
```

Output:

```text
Budi adalah siswa kelas X-A dengan nilai 90.
```

F-string sangat berguna ketika kita ingin membuat tampilan informasi yang lebih rapi.

---

## Menerima Data dari Pengguna

Program akan menjadi lebih interaktif jika pengguna dapat memasukkan data.

Python menyediakan fungsi `input()` untuk menerima data dari pengguna.

Contoh:

```python
nama = input("Masukkan nama: ")

print("Halo", nama)
```

Jika pengguna memasukkan:

```text
Budi
```

Output:

```text
Halo Budi
```

Data yang dimasukkan pengguna disimpan ke dalam variabel `nama`.

---

## Cara Kerja `input()`

Perhatikan program:

```python
nama = input("Masukkan nama: ")
```

Program menampilkan pesan:

```text
Masukkan nama:
```

Kemudian program menunggu pengguna mengetikkan data.

Jika pengguna mengetik:

```text
Budi
```

maka nilai tersebut disimpan ke dalam:

```python
nama
```

Sehingga setelah proses tersebut:

```text
nama ───► "Budi"
```

Program kemudian dapat menggunakan variabel `nama`.

---

## Input Angka

Ada hal penting yang harus dipahami ketika menggunakan `input()`.

Data dari `input()` secara default bertipe `str`.

Contoh:

```python
umur = input("Masukkan umur: ")

print(type(umur))
```

Jika pengguna memasukkan:

```text
17
```

hasil tipe datanya tetap:

```text
<class 'str'>
```

Hal ini terjadi karena `input()` membaca masukan pengguna sebagai teks.

---

## Mengubah Input Menjadi Integer

Jika data yang dimasukkan merupakan bilangan bulat dan akan digunakan untuk perhitungan, kita dapat menggunakan `int()`.

Contoh:

```python
umur = int(input("Masukkan umur: "))

print(umur + 1)
```

Jika pengguna memasukkan:

```text
17
```

Output:

```text
18
```

Dengan `int()`, teks `"17"` diubah menjadi bilangan `17`.

---

## Mengubah Input Menjadi Float

Jika pengguna memasukkan bilangan desimal, gunakan `float()`.

Contoh:

```python
tinggi = float(input("Masukkan tinggi badan: "))

print("Tinggi badan:", tinggi)
```

Jika pengguna memasukkan:

```text
165.5
```

Python akan menyimpannya sebagai tipe `float`.

---

## Contoh Program Biodata

Berikut contoh program yang menggunakan variabel, `input()`, `int()`, dan f-string.

```python
nama = input("Nama lengkap: ")
kelas = input("Kelas: ")
umur = int(input("Umur: "))
hobi = input("Hobi: ")
cita_cita = input("Cita-cita: ")

print()
print("=== BIODATA SISWA ===")
print(f"Nama      : {nama}")
print(f"Kelas     : {kelas}")
print(f"Umur      : {umur} tahun")
print(f"Hobi      : {hobi}")
print(f"Cita-cita : {cita_cita}")
```

Contoh output:

```text
Nama lengkap: Budi Santoso
Kelas: X-A
Umur: 16
Hobi: Membaca
Cita-cita: Programmer

=== BIODATA SISWA ===
Nama      : Budi Santoso
Kelas     : X-A
Umur      : 16 tahun
Hobi      : Membaca
Cita-cita : Programmer
```

Program tersebut menunjukkan bahwa beberapa variabel dapat digunakan bersama-sama untuk membangun sebuah program sederhana.

---

## Contoh Program Menghitung Total Harga

Variabel juga dapat digunakan untuk membuat program yang lebih dekat dengan kehidupan sehari-hari.

```python
nama_barang = input("Nama barang: ")
harga = int(input("Harga barang: "))
jumlah = int(input("Jumlah barang: "))

total = harga * jumlah

print()
print("=== STRUK PEMBELIAN ===")
print(f"Barang      : {nama_barang}")
print(f"Harga       : {harga}")
print(f"Jumlah      : {jumlah}")
print(f"Total Harga : {total}")
```

Jika pengguna memasukkan:

```text
Nama barang: Buku
Harga barang: 5000
Jumlah barang: 3
```

Output:

```text
=== STRUK PEMBELIAN ===
Barang      : Buku
Harga       : 5000
Jumlah      : 3
Total Harga : 15000
```

Program tersebut menggunakan variabel untuk menyimpan data input dan hasil perhitungan.

---

## Contoh Program Data Nilai Siswa

Contoh berikut menggabungkan input, variabel, dan perhitungan.

```python
nama = input("Nama siswa: ")

nilai_matematika = float(input("Nilai Matematika: "))
nilai_bahasa = float(input("Nilai Bahasa Indonesia: "))
nilai_informatika = float(input("Nilai Informatika: "))

rata_rata = (
    nilai_matematika +
    nilai_bahasa +
    nilai_informatika
) / 3

print()
print("=== HASIL NILAI ===")
print(f"Nama       : {nama}")
print(f"Matematika : {nilai_matematika}")
print(f"Bahasa     : {nilai_bahasa}")
print(f"Informatika: {nilai_informatika}")
print(f"Rata-rata  : {rata_rata}")
```

Program tersebut memperlihatkan bahwa variabel dapat digunakan untuk menyimpan banyak informasi sekaligus.

---

## Mengetahui Tipe Data Variabel

Kita dapat menggunakan fungsi `type()` untuk mengetahui tipe data yang disimpan oleh variabel.

Contoh:

```python
nama = "Budi"
umur = 17
tinggi = 165.5
aktif = True

print(type(nama))
print(type(umur))
print(type(tinggi))
print(type(aktif))
```

Output:

```text
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
```

Dengan fungsi `type()`, kita dapat memeriksa bagaimana Python mengenali sebuah nilai.

---

## Kesalahan yang Sering Terjadi

### Variabel diawali angka

Salah:

```python
1nama = "Budi"
```

Benar:

```python
nama1 = "Budi"
```

---

### Menggunakan spasi

Salah:

```python
nama siswa = "Budi"
```

Benar:

```python
nama_siswa = "Budi"
```

---

### Salah membedakan huruf besar dan kecil

Contoh:

```python
nama = "Budi"

print(Nama)
```

Kode tersebut akan menghasilkan error karena `nama` dan `Nama` merupakan nama yang berbeda.

Gunakan penulisan yang sama:

```python
nama = "Budi"

print(nama)
```

---

### Menjumlahkan string dan integer secara langsung

Contoh:

```python
umur = 17

print("Umur saya " + umur)
```

Kode tersebut akan menghasilkan error karena `"Umur saya "` merupakan `str`, sedangkan `umur` merupakan `int`.

Gunakan:

```python
print("Umur saya", umur)
```

atau:

```python
print(f"Umur saya {umur} tahun")
```

---

### Lupa mengubah input menjadi angka

Contoh:

```python
umur = input("Masukkan umur: ")

print(umur + 1)
```

Kode tersebut bermasalah karena hasil `input()` berupa `str`.

Gunakan:

```python
umur = int(input("Masukkan umur: "))

print(umur + 1)
```

---

## Latihan Pemahaman

### Latihan 1 — Mengenal Variabel

Perhatikan kode berikut:

```python
nama = "Andi"
umur = 16
tinggi = 170.5
aktif = True
```

Tentukan:

1. Nama variabel.
2. Nilai masing-masing variabel.
3. Tipe data masing-masing variabel.

---

## Latihan 2 — Membuat Variabel

Buatlah program dengan variabel:

```text
nama
kelas
umur
sekolah
```

Kemudian tampilkan seluruh data tersebut.

Output dapat dibuat seperti:

```text
=== DATA SISWA ===
Nama    :
Kelas   :
Umur    :
Sekolah :
```

---

## Latihan 3 — Menghitung Luas

Buatlah program untuk menghitung luas persegi panjang.

Gunakan:

```text
panjang = 15
lebar = 8
```

Output:

```text
Luas persegi panjang = 120
```

---

## Latihan 4 — Menghitung Rata-Rata

Buatlah program yang memiliki tiga variabel:

```text
nilai_matematika
nilai_bahasa
nilai_informatika
```

Hitung nilai rata-ratanya.

---

## Latihan 5 — Input Biodata

Buatlah program yang meminta pengguna memasukkan:

```text
Nama Lengkap
Kelas
Umur
Hobi
Cita-cita
```

Kemudian tampilkan seluruh data tersebut.

---

## Latihan 6 — Program Belanja

Buatlah program yang meminta:

```text
Nama barang
Harga barang
Jumlah barang
```

Kemudian hitung:

```text
total = harga × jumlah
```

Tampilkan hasilnya dalam bentuk struk sederhana.

---

## Latihan 7 — Tantangan

Buatlah program **Data Nilai Siswa**.

Program meminta pengguna memasukkan:

```text
Nama siswa
Nilai Matematika
Nilai Bahasa Indonesia
Nilai Informatika
```

Program kemudian:

1. Menghitung rata-rata.
2. Menampilkan nama siswa.
3. Menampilkan seluruh nilai.
4. Menampilkan nilai rata-rata.

Gunakan variabel untuk menyimpan semua data tersebut.

---

## Aktivitas Praktik

Buat sebuah program sederhana dengan tema **Biodata Siswa**.

Program minimal harus memiliki:

- 5 variabel.
- Minimal 2 tipe data yang berbeda.
- Menggunakan `input()`.
- Menggunakan `print()`.
- Menggunakan f-string.
- Memiliki minimal 1 perhitungan sederhana.

Contoh pengembangan:

```python
nama = input("Nama: ")
kelas = input("Kelas: ")
umur = int(input("Umur: "))
tahun_lahir = 2026 - umur
tinggi = float(input("Tinggi badan: "))

print()
print("=== BIODATA ===")
print(f"Nama        : {nama}")
print(f"Kelas       : {kelas}")
print(f"Umur        : {umur} tahun")
print(f"Tahun lahir : {tahun_lahir}")
print(f"Tinggi      : {tinggi} cm")
```

---

## Hal-hal yang Perlu Diperhatikan

Variabel digunakan untuk menyimpan atau merujuk pada nilai dalam program.

Operator `=` digunakan untuk memberikan nilai kepada variabel.

Python dapat menentukan tipe data berdasarkan nilai yang diberikan.

Nilai sebuah variabel dapat digunakan berkali-kali.

Nilai variabel dapat diubah selama program berjalan.

Nama variabel tidak boleh diawali angka.

Nama variabel tidak boleh menggunakan spasi.

Python membedakan huruf besar dan huruf kecil.

Gunakan nama variabel yang jelas dan mudah dipahami.

Untuk nama variabel yang terdiri dari beberapa kata, gunakan garis bawah seperti `nama_siswa`.

Fungsi `print()` digunakan untuk menampilkan data.

Fungsi `input()` digunakan untuk menerima data dari pengguna.

Data dari `input()` secara default bertipe `str`.

Gunakan `int()` untuk mengubah data menjadi bilangan bulat.

Gunakan `float()` untuk mengubah data menjadi bilangan desimal.

Gunakan f-string untuk menampilkan teks bersama variabel secara lebih rapi.

Variabel dapat digunakan dalam operasi matematika dan berbagai proses pengolahan data.

---

## Kesimpulan

Variabel merupakan salah satu konsep dasar yang sangat penting dalam pemrograman Python.

Variabel digunakan untuk memberikan nama pada sebuah nilai sehingga nilai tersebut dapat disimpan, digunakan kembali, dan diolah dalam program.

Contoh:

```python
nama = "Budi"
umur = 17
tinggi = 165.5
siswa_aktif = True
```

Pada contoh tersebut terdapat empat variabel dengan tipe data yang berbeda.

Variabel juga dapat digunakan dalam perhitungan:

```python
panjang = 10
lebar = 5

luas = panjang * lebar

print(luas)
```

Variabel juga dapat menerima data dari pengguna:

```python
nama = input("Masukkan nama: ")

print(f"Halo {nama}")
```

Dengan memahami variabel, peserta didik sudah memiliki salah satu fondasi penting untuk membuat program yang lebih kompleks.

Pada materi berikutnya, konsep variabel akan digunakan bersama **operator dan ekspresi Python** sehingga program dapat melakukan perhitungan, perbandingan, dan pengolahan data dengan lebih baik.
