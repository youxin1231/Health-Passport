# Execute project
## Prerequirement
- xampp 8.0.28 ([download link](https://www.apachefriends.org/zh_tw/download.html))
- php package
```bash=
sudo apt install php
```

## Setup
- (one terminal) Start Xampp: 
```bash=
$ sudo /opt/lampp/manager-linux-x64.run 
```
- start MySQL and Web Server:  
![image alt](https://i.imgur.com/V8Wf0KQ.png)
- (another terminal):
```bash=
$ cd /to/our/project/
$ php -S localhost:8080
```
- Then, open Web browser, enter url: "localhost:8080/Web_Frontend/html/inrto.html"
- Enjoy the web page.