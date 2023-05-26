# Execute project
## Prerequirement
- ubuntu 20.04 (Optimal)
- xampp 8.0.28 ([download link](https://www.apachefriends.org/zh_tw/download.html))
- php package
```bash=
$ sudo apt install php
```

## Setup
- (In terminal) Start Xampp: 
```bash=
$ sudo /opt/lampp/manager-linux-x64.run 
```

## Create database
- Step1: Start MySQL and Web Server:  
![image alt](https://i.imgur.com/V8Wf0KQ.png)

- Step2: Enter [MySQL database](http://localhost/phpmyadmin)
- Step3: Create 2 databases **"data"**, **"file"**.  
  ![image alt](https://i.imgur.com/X5Uybe1.png)
- Step4: **"data"** database structure.  
  ![image alt](https://i.imgur.com/tYnPcd2.png)
- Step5: **"file"** database structure.  
  ![iamge alt](https://i.imgur.com/vih6u5Q.png)

# Enter webpage
- (In terminal):
```bash=
$ cd ./Health_Passport
$ php -S localhost:8080
```
- Then, open Web browser, enter [intro page](http://localhost:8080/Web_Frontend/html/intro.html).
- Enjoy the webpage.