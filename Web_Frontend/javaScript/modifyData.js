function getRadioValue(name){
    var radioes = document.getElementsByName(name);
    for(var i=0;i<radioes.length;i++)
    {
         if(radioes[i].checked){
          return radioes[i].value;
         }
    }
    return false;
}

$(document).ready(function(e) {

    var url = location.href;
    if(url.indexOf('?')!=-1){
        var ary1 = url.split('?');
        var ary2 = ary1[1].split('&');
        var ary3 = ary2[0].split('=');
        var name = ary3[1];
    }

    $.ajax({
        type: "POST",
        url: "../php/modifyData.php",
        data:{
            msg: name,
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        success: function(output) {
            output = $.parseJSON(output);
            console.log(output);
            document.getElementById('setPwd').setAttribute('value',output[0]);
            document.getElementById('setMail').setAttribute('value',output[1]);
            if (output[2] == 'Male')
                document.querySelector('[value="Male"]').checked = true;
            else
                document.querySelector('[value="Female"]').checked = true;
            document.getElementById('setColor').setAttribute('value',output[3]);
            document.getElementById('setName').setAttribute('value',output[4]);
        }
    });

    $("#send").click(function() {
        if($("#setName").val() != "" && $("#setPwd").val() != "" && $("#setMail").val() != ""){
            $.ajax({
                type: "POST",
                url: "../php/updateData.php",
                data: {
                    oldname: name,
                    newname: $("#setName").val(),
                    pwd: $("#setPwd").val(),
                    mail: $("#setMail").val(),
                    gender: getRadioValue('gender'),
                    color: $("#setColor").val()
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                },
                success: function(output) {
                    console.log(output);
                    if (output == 1)
                        alert("User name already in use!");
                    else
                        alert("Success!");
                        location.href = ary1[0] + "?username=" + $("#setName").val();
                }
            });
        }
        else
            alert("It couldn't be empty!");
    });
});