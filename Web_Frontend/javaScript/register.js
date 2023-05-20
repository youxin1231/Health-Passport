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

function insertData(){
    $.ajax({
        type: "POST",
        url: "../php/insertData.php",
        data: {
            msg: $("#msg").val(),
            pwd: $("#pwd").val(),
            mail: $("#mail").val(),
            national_id: $("#national_id").val(),
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        success: function(output) {
            console.log(output);
            window.location.href="homePage.html?username=" + $("#msg").val();
        }
    });
}


$(document).ready(function(e) {

    $("#reg").click(function() {
        if($("#msg").val() != ""){
            $.ajax({
                type: "POST",
                url: "../php/register.php",
                data: {
                    msg: $("#msg").val()
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                },
                success: function(output) {
                    console.log(output);
                    if (output == 0)
                        insertData();
                    else
                        alert("User name already in use!");
                }
            });
        }
    });
});