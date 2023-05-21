$(document).ready(function(e) {

    refresh();

});


var edit;
var load;
var del;


function refresh() {

    var url = location.href;
    if(url.indexOf('?')!=-1){
        var ary1 = url.split('?');
        var ary2 = ary1[1].split('&');
        var ary3 = ary2[0].split('=');
        var name = ary3[1];
    }
    $.ajax({
        type: "POST",
        url: "../php/fileManager.php",
        data: {
            msg: name
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        success: function(output) {
            output = $.parseJSON(output);
            console.log(output);
            var table = "";
            for (var num = 0; num < output.length; num++) {
                table += "<tr><td>" + output[num][0] + "</td>";
                table += "<td>" + output[num][1] + "</td>";
                table += "<td>" + output[num][2] + "</td>";
                table += "<td><button id=\"e" + output[num][0] + "\" class=\"btn btn-secondary edit\"><i class=\"fa fa-edit\"></i></button>" +
                "<a href=\"../php/downloadFile.php?filename=" + output[num][0] + "\"><button id=\"l" + output[num][0] + "\" class=\"btn btn-secondary dl\"><i class=\"fa fa-download\"></i></button></a>" + 
                "<button id=\"d" + output[num][0] + "\" class=\"btn btn-secondary del\"><i class=\"fa fa-trash\"></i></button></td></tr>";
            
            }

            $("#message_table").html(table);
        }
    });
};

$("#tableId").on('click', '.edit', function(val){
    var url = location.href;
    if(url.indexOf('?')!=-1){
        var ary1 = url.split('?');
        var ary2 = ary1[1].split('&');  
        var ary3 = ary2[0].split('=');
        var name = ary3[1];
    }

    var string = val.currentTarget.id;
    var NewArray = new Array();
    var NewArray = string.split("e");

    var newfname = window.prompt('Input the new name over here.');
    if (newfname == null || newfname == "") {
        alert("It couldn't be empty!");
    } else {
        $.ajax({
            type: "POST",
            url: "../php/editFile.php",
            data:{
                fname: NewArray[1],
                user: name,
                newfname: newfname
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            },
            success: function(output) {
                console.log(output);
                alert("Edit success!");
                refresh();
            },
        });
    }
});

$("#tableId").on('click', load, function(){
    $.ajax({
        url: '../php/downloadFile.php',
        type: 'post',
        contentType: false,
        processData: false,
    });
});

$("#tableId").on('click', '.del', function(val){

    var url = location.href;
    if(url.indexOf('?')!=-1){
        var ary1 = url.split('?');
        var ary2 = ary1[1].split('&');
        var ary3 = ary2[0].split('=');
        var name = ary3[1];
    }

    var string = val.currentTarget.id;
    var NewArray = new Array();
    var NewArray = string.split("d");
    $.ajax({
        type: "POST",
        url: "../php/deleteFile.php",
        data:{
            fname: NewArray[1],
            user: name
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        success: function(output) {
            console.log(output);
            alert("Delete success!");
            refresh();
        },
    });
});

$("#but_upload").click(function(){
    var url = location.href;
    if(url.indexOf('?')!=-1){
        var ary1 = url.split('?');
        var ary2 = ary1[1].split('&');
        var ary3 = ary2[0].split('=');
        var name = ary3[1];
    }
    var fd = new FormData();
    var files = $('#files')[0].files;


    // Check file selected or not
    fd.append('file',files[0]);
    fd.append('name',name);

    $.ajax({
        url: '../php/uploadFile.php',
        type: 'post',
        data:fd,
        contentType: false,
        processData: false,
        success: function(response){
            if(response == 0){
                alert('file not uploaded!');
            }
            else if(response == 1){
                alert("file duplicate!");
            }
            else{
                alert("Upload success!");
                refresh();
            }
        },
    });
});