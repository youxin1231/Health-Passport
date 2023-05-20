$(document).ready(function(e) {

    $("#send").click(function() {
        if($("#msg").val() != ""){
            $.ajax({
                type: "POST",
                url: "../php/signIn.php",
                data: {
                    msg: $("#msg").val(),
                    pwd: $("#pwd").val()
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                },
                success: function(output) {
                    console.log(output);
                    var name = $("#msg").val();
                    if (output == 1){
                        window.location.href="homePage.html?username=" + name;
                    }
                    else
                        $("#warning").html("User name or password incorrect!");
                }
            });
        }
    });
});