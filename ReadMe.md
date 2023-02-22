# OJT MINIAPP - TEST


Note :
- Terdapat Bug pada roload halaman dimana ketika user login seharusnya membawa session namun ketika 
  dialihkan ke dashboard halaman di reload dan redux dev tool tidak membacanya
- Terdapat bug ketika fecth data dummyjson, pada redux dev tool telah berisi data dengan action fullfield
  namun data tidak tampil pada table
- Session yang digunakan adalah sequlize-session dengan uuid dari user sebagai session nya
  Yang dikirimkan ke Client (bisa di hash dengan argon2 sebelum dikirim ke Client) namun, karena terjadi bug reload 
  Membuat saya mengurungkan hal tersebut 
  
Fixed : 
- Sidebar dan Navbar menjadi pilihan untuk tampilan frontend, bug terdapat ketika reload untuk memunculkan sidebar
  jika menggunakan Navbar dapat di fixed namun tampilan akan berubah menjadi kurang menarik dan menambahkan
  logic untuk beralih ke login jika session belum tersedia
- Menggunakan json-server pada db.json untuk get datanya (memang dirasa kurang, namun semua implementasi untuk soal OJT bisa berjalan
  sebagaimana mestinya)


Fitur :
- Button Check pada Product Page untuk memunculkan modal yang di popup
- Button Detail pada Product Page mengarahkan detail product berdasarkan IDproduct
- List Product dan User Active pada Dashboard 

#### Screenshoot LoginPage
Login Page
![LoginPage](images/LoginPage.PNG)

#### Screenshoot 2
Register Page
![RegisterPage](images/RegisterPage.PNG)

#### Screenshoot 3
Modal Product
![ModalProduct](images/ModalProduct.PNG)

#### Screenshoot 4
Detail Product
![DetailProduct](images/DetailProduct.PNG)

#### Screenshoot 5
Dashboard
![Dashboard](images/Dashboard.PNG)

####Backend
Get Redis
![GetRedisProduct](images/GetRedisProduct.PNG)

####Backend
Get Redis by ID
![GetRedisByID](images/GetRedisByID.PNG)

