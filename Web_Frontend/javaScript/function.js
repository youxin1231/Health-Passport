$(document).ready(function(e) {
    refresh();
});

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
        url: "../php/showMsg.php",
        data: {
            msg: name,
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        success: function(output) {
            output = $.parseJSON(output);
            console.log(output);
            var table1 = "";
            for (var num = 0; num < output.length; num++) {
                table1 += "<tr><td>" + output[num][0] + "</td>";
                table1 += "<td>" + output[num][1] + "</td>";
                table1 += "<td>" + output[num][2] + "</td>";
                table1 += "<td>" + output[num][3] + "</td>";
                table1 += "<td>" + output[num][4] + "</td>";
                table1 += "<td>" + "<div style=\"margin-left: 10px;width: 20px; height: 20px ;background-color: " + output[num][3] +";\"></div>" + "</td></tr>";
            }

            var table2 = "";
            for (var num = 0; num < output.length; num++) {
                output[num][9] = (output[num][9] - 32) * (5 / 9);
                output[num][9] = output[num][9].toFixed(2);
                table2 += "<tr><td>" + output[num][5] + "</td>";
                table2 += "<td>" + output[num][6] + "</td>";
                table2 += "<td>" + output[num][7] + "</td>";
                table2 += "<td>" + output[num][8] + "</td>";
                table2 += "<td>" + output[num][9] + "</td>";
                table2 += "<td>" + "<div style=\"margin-left: 10px;width: 20px; height: 20px ;background-color: " + output[num][3] +";\"></div>" + "</td></tr>";
            }

            var table3 = "";
            for (var num = 0; num < output.length; num++) {
                table3 += "<tr><td>" + output[num][10] + "</td>";
                table3 += "<td>" + output[num][11] + "</td>";
                table3 += "<td>" + output[num][12] + "</td>";
                table3 += "<td>" + output[num][13] + "</td>";
                table3 += "<td>" + output[num][14] + "</td>";
                table3 += "<td>" + "<div style=\"margin-left: 10px;width: 20px; height: 20px ;background-color: " + output[num][3] +";\"></div>" + "</td></tr>";
            }

            var d_history = output[0][15];
            var med_history = output[0][16];

            // var health_status = "";
            // var num = 0;
            // var res = (Number(output[num][7]) + Number(output[num][8]) + Number(output[num][10]) + Number(output[num][11]) + Number(output[num][12]) + Number(output[num][13]))%100;
            // // console.log(res);
            // if (res >= 40){
            //     health_status = "<img src=\"../image/smiling-face.png\" alt=\"smile\" style=\"height: 25px; width: 25px\"></img>";
            // } else if (res < 40 && res > 20) {  
            //     health_status = "<img src=\"../image/meh.png\" alt=\"meh\" style=\"height: 25px; width: 25px\"></img>";
            // } else {
            //     health_status = "<img src=\"../image/sad.png\" alt=\"sad\" style=\"height: 25px; width: 25px\"></img>";
            // }
            
            if (output[0][17] <=1) {
                health_status = "<img src=\"../image/smiling-face.png\" alt=\"smile\" style=\"height: 25px; width: 25px\"></img>";
            } else if (output[0][17] ==2) {
                health_status = "<img src=\"../image/meh.png\" alt=\"meh\" style=\"height: 25px; width: 25px\"></img>";
            } else {
                health_status = "<img src=\"../image/sad.png\" alt=\"sad\" style=\"height: 25px; width: 25px\"></img>";
            }

            $("#message_table1").html(table1);
            $("#message_table2").html(table2);
            $("#message_table3").html(table3);
            $('#drug_history').html(d_history);
            $('#medical_history').html(med_history);
            $('#health_status').html(health_status);
        }
    });
}