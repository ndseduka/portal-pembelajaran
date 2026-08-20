---
title: 06. Tipe Data Dasar pada Python
layout: learning.njk
order: 4
permalink: "/koding/tipe-data-dasar-python/"
---

# Tipe Data Dasar Python
---

Pada materi ini, peserta didik akan mempelajari pengertian tipe data (data type), fungsi tipe data, serta beberapa tipe data dasar yang sering digunakan dalam bahasa pemrograman Python. Peserta didik akan mengenal tipe data integer (`int`), float (`float`), string (`str`), dan boolean (`bool`), serta cara mengetahui tipe data menggunakan fungsi `type()`.

---

## Tipe Data (Data Type) pada Python
<img src="/portal-pembelajaran/assets/images/koding/8-tipe-data-dasar-python.webp" alt="Tipe Data Dasar pada Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">
Tipe data (data type) adalah jenis atau kategori data yang digunakan dalam sebuah program. Tipe data membantu Python mengetahui bagaimana suatu nilai harus diperlakukan dan digunakan dalam program.
Dalam kehidupan sehari-hari, kita mengenal berbagai jenis data. Misalnya nama seseorang berupa teks, umur berupa bilangan bulat, tinggi badan berupa bilangan desimal, dan status siswa berupa benar atau salah.
Python juga membedakan berbagai jenis data tersebut.
Contoh:
```python
nama = "Budi"
umur = 17
tinggi = 165.5
siswa_aktif = True
```
Pada contoh tersebut terdapat empat tipe data yang berbeda:
`nama = "Budi"` → tipe data `str`
`umur = 17` → tipe data `int`
`tinggi = 165.5` → tipe data `float`
`siswa_aktif = True` → tipe data `bool`
Python dapat menentukan tipe data berdasarkan nilai yang diberikan kepada sebuah variabel.
---

## Tujuan Pembelajaran
Setelah mempelajari materi ini, peserta didik diharapkan mampu:
1. Memahami pengertian tipe data pada bahasa pemrograman Python.
2. Menjelaskan fungsi tipe data dalam sebuah program.
3. Mengenal tipe data `int`, `float`, `str`, dan `bool`.
4. Membuat variabel menggunakan tipe data yang sesuai.
5. Membedakan bilangan bulat, bilangan desimal, teks, dan nilai boolean.
6. Mengetahui tipe data menggunakan fungsi `type()`.

---

## Variabel dan Tipe Data
Variabel adalah nama yang digunakan untuk menyimpan sebuah nilai atau data.
Contoh:
```python
nama = "Budi"
umur = 17
```
Pada kode tersebut:
`nama` merupakan nama variabel.
`"Budi"` merupakan nilai yang disimpan.
`umur` merupakan nama variabel.
`17` merupakan nilai yang disimpan.
Python akan menentukan tipe data berdasarkan nilai yang diberikan kepada variabel.
Contoh:
```python
nama = "Budi"
```
Karena `"Budi"` merupakan teks, maka variabel `nama` memiliki tipe data `str`.
Sedangkan:
```python
umur = 17
```
memiliki tipe data `int` karena `17` merupakan bilangan bulat.

---

## Integer (`int`)
Integer atau `int` adalah tipe data yang digunakan untuk menyimpan bilangan bulat.
Bilangan bulat adalah bilangan yang tidak memiliki angka desimal.
Contoh:
```python
umur = 17
jumlah_siswa = 32
tahun = 2026
nilai = 90
```
Bilangan negatif juga termasuk integer.
Contoh:
```python
suhu = -5
```
Semua nilai tersebut merupakan bilangan bulat sehingga Python mengenalinya sebagai tipe data `int`.

---
Contoh Integer
```python
umur = 17

print(umur)
print(type(umur))
```
Output:
```text
17
<class 'int'>
```
Pada contoh tersebut, `17` merupakan bilangan bulat sehingga tipe datanya adalah `int`.
Fungsi `type()` digunakan untuk mengetahui tipe data dari variabel `umur`.

---

## Float (`float`)
Float adalah tipe data yang digunakan untuk menyimpan bilangan desimal.
Contoh:
```python
tinggi = 165.5
berat = 55.7
nilai = 87.5
suhu = 36.5
```
Bilangan desimal dalam Python menggunakan tanda titik (`.`).
Contoh yang benar:
```python
nilai = 87.5
```
Bukan:
```python
nilai = 87,5
```
---
Contoh Float
```python
nilai = 87.5

print(nilai)
print(type(nilai))
```
Output:
```text
87.5
<class 'float'>
```
Karena `87.5` memiliki bagian desimal, Python mengenalinya sebagai tipe data `float`.

---

## String (`str`)
String atau `str` adalah tipe data yang digunakan untuk menyimpan teks atau kumpulan karakter.
String ditulis menggunakan tanda kutip satu (`' '`) atau tanda kutip dua (`" "`).
Contoh:
```python
nama = "Budi"
kelas = "X-A"
sekolah = "SMA Negeri 1 Sandai"
```
String juga dapat ditulis menggunakan tanda kutip satu:
```python
nama = 'Budi'
```
Keduanya merupakan tipe data `str`.

---
Contoh String
```python
nama = "Budi"

print(nama)
print(type(nama))
```
Output:
```text
Budi
<class 'str'>
```
Pada contoh tersebut, `"Budi"` merupakan teks sehingga tipe datanya adalah `str`.

---
Angka dan String
Perhatikan dua contoh berikut:
```python
umur = 17
```
dan:
```python
umur = "17"
```
Walaupun terlihat sama, kedua nilai tersebut memiliki tipe data yang berbeda.
Contoh:
```python
umur1 = 17
umur2 = "17"

print(type(umur1))
print(type(umur2))
```
Output:
```text
<class 'int'>
<class 'str'>
```
`17` merupakan angka sehingga memiliki tipe data `int`.
Sedangkan `"17"` merupakan teks karena berada di dalam tanda kutip sehingga memiliki tipe data `str`.
Perbedaan ini sangat penting karena Python akan memperlakukan angka dan teks dengan cara yang berbeda.

---

## Boolean (`bool`)
Boolean atau `bool` adalah tipe data yang hanya memiliki dua nilai, yaitu:
```python
True
False
```
`True` berarti benar, sedangkan `False` berarti salah.
Contoh:
```python
siswa_aktif = True
sudah_lulus = False
```
Boolean biasanya digunakan untuk menyimpan informasi yang memiliki dua kemungkinan kondisi.
Misalnya:
Siswa aktif atau tidak.
Sudah lulus atau belum.
Lampu menyala atau mati.
Data tersedia atau tidak.

---
Contoh Boolean
```python
siswa_aktif = True

print(siswa_aktif)
print(type(siswa_aktif))
```
Output:
```text
True
<class 'bool'>
```
Pada contoh tersebut, `True` merupakan nilai boolean sehingga tipe datanya adalah `bool`.

---

Boolean dari Perbandingan
Boolean juga dapat diperoleh dari hasil perbandingan.
Contoh:
```python
nilai = 85

lulus = nilai >= 75

print(lulus)
```
Output:
```text
True
```
Karena nilai `85` lebih besar atau sama dengan `75`, maka hasil perbandingan tersebut adalah `True`.
Contoh lainnya:
```python
nilai = 60

lulus = nilai >= 75

print(lulus)
```
Output:
```text
False
```
Karena nilai `60` tidak lebih besar atau sama dengan `75`, maka hasilnya adalah `False`.

---

## Fungsi `type()`
Python menyediakan fungsi bawaan bernama `type()`.
Fungsi `type()` digunakan untuk mengetahui tipe data suatu nilai atau variabel.
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
Dengan menggunakan `type()`, kita dapat mengetahui bagaimana Python mengenali sebuah data.

---

## Contoh Penggunaan `type()`
Perhatikan program berikut:
```python
nama = "Budi"
umur = 17
nilai = 85.5
aktif = True

print("Nama:", nama)
print("Tipe nama:", type(nama))

print("Umur:", umur)
print("Tipe umur:", type(umur))

print("Nilai:", nilai)
print("Tipe nilai:", type(nilai))

print("Aktif:", aktif)
print("Tipe aktif:", type(aktif))
```
Output:
```text
Nama: Budi
Tipe nama: <class 'str'>
Umur: 17
Tipe umur: <class 'int'>
Nilai: 85.5
Tipe nilai: <class 'float'>
Aktif: True
Tipe aktif: <class 'bool'>
```
---
Contoh Program
Berikut contoh program yang menggunakan beberapa tipe data dasar sekaligus:
```python
# Data siswa

nama = "Budi"
umur = 17
tinggi = 165.5
siswa_aktif = True

print("=== DATA SISWA ===")

print("Nama:", nama)
print("Umur:", umur)
print("Tinggi:", tinggi)
print("Siswa Aktif:", siswa_aktif)

print()

print("=== TIPE DATA ===")

print("Nama:", type(nama))
print("Umur:", type(umur))
print("Tinggi:", type(tinggi))
print("Siswa Aktif:", type(siswa_aktif))
```
Output:
```text
=== DATA SISWA ===
Nama: Budi
Umur: 17
Tinggi: 165.5
Siswa Aktif: True

=== TIPE DATA ===
Nama: <class 'str'>
Umur: <class 'int'>
Tinggi: <class 'float'>
Siswa Aktif: <class 'bool'>
```
Pada program tersebut, setiap variabel memiliki tipe data yang berbeda sesuai dengan jenis informasi yang disimpan.

---

## Perbandingan Tipe Data Dasar
`int`
Digunakan untuk bilangan bulat.
Contoh:
```python
umur = 17
```
`float`
Digunakan untuk bilangan desimal.
Contoh:
```python
tinggi = 165.5
```
`str`
Digunakan untuk teks.
Contoh:
```python
nama = "Budi"
```
`bool`
Digunakan untuk nilai benar atau salah.
Contoh:
```python
siswa_aktif = True
```
Secara sederhana dapat diingat:
```text
int   → bilangan bulat
float → bilangan desimal
str   → teks
bool  → benar atau salah
```
---

## Hal-hal yang Perlu Diperhatikan
Gunakan `int` untuk menyimpan bilangan bulat.
Gunakan `float` untuk menyimpan bilangan desimal.
Gunakan `str` untuk menyimpan teks.
Gunakan `bool` untuk menyimpan nilai `True` atau `False`.
Teks harus ditulis menggunakan tanda kutip.
Angka yang ditulis di dalam tanda kutip akan dianggap sebagai `str`.
Bilangan desimal menggunakan tanda titik (`.`), bukan koma.
`True` dan `False` harus ditulis dengan huruf awal kapital.
Gunakan `type()` untuk mengetahui tipe data suatu nilai atau variabel.
Pemilihan tipe data yang tepat akan mempermudah proses pengolahan data dalam program.

---

## Kesimpulan
Tipe data (data type) merupakan bagian penting dalam pemrograman Python yang digunakan untuk menentukan jenis data yang disimpan oleh sebuah variabel.
Beberapa tipe data dasar yang perlu dipahami adalah `int`, `float`, `str`, dan `bool`.
`int` digunakan untuk bilangan bulat, `float` digunakan untuk bilangan desimal, `str` digunakan untuk teks, sedangkan `bool` digunakan untuk nilai benar atau salah (`True` dan `False`).
Python dapat menentukan tipe data berdasarkan nilai yang diberikan kepada variabel. Untuk mengetahui tipe data suatu variabel, kita dapat menggunakan fungsi `type()`.
Pemahaman tentang tipe data dasar merupakan fondasi penting sebelum mempelajari tipe data koleksi seperti `list`, `tuple`, `set`, dan `dict`, serta materi Python lainnya.