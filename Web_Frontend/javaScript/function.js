$(document).ready(function(e) {
    refresh();
});

function refresh() {
    $.ajax({
        type: "POST",
        url: "../php/showMsg.php",
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
                table += "<td>" + "<div style=\"margin-left: 10px;width: 20px; height: 20px ;background-color: " + output[num][3] +";\"></div>" + "</td></tr>";
            }

            $("#message_table").html(table);
        }
    });
}