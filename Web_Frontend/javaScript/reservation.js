function changeURL(e){
    var name = document.getElementById('username').innerHTML;
    var url =  e + "?username=" + name;
    location.href=url;
}

var url = location.href;
if(url.indexOf('?')!=-1){
    var ary1 = url.split('?');
    var ary2 = ary1[1].split('&');
    var ary3 = ary2[0].split('=');
    var user = ary3[1];
}
$("#username").html(user);

$("#reserve").click(function(){
    window.alert("Reservation successed!");
    changeURL("homePage.html");
});