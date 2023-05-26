function changeURL(e){
    var name = document.getElementById('username').innerHTML;
    var url =  e + "?username=" + name;
    location.href=url;
}

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

            output[12] = (output[12] - 32) * (5/9);
            output[12] = output[12].toFixed(2);

            document.getElementById('setFirst_Name').setAttribute('value',output[2]);
            document.getElementById('setLast_Name').setAttribute('value',output[3]);
            document.getElementById('setEmail').setAttribute('value',output[5]);
            document.getElementById('setNational_ID').setAttribute('value',output[6]);
            document.getElementById('setPhone_Number').setAttribute('value',output[7]);
            document.getElementById('setGender').setAttribute('value',output[8]);
            document.getElementById('setAge').setAttribute('value',output[9]);
            document.getElementById('setWeight').setAttribute('value',output[10]);
            document.getElementById('setHeight').setAttribute('value',output[11]);
            document.getElementById('setBody_Temperature').setAttribute('value',output[12]);
            document.getElementById('setPULSE').setAttribute('value',output[13]);
            document.getElementById('setRESPR').setAttribute('value',output[14]);
            document.getElementById('setBPSYS').setAttribute('value',output[15]);
            document.getElementById('setBPDIAS').setAttribute('value',output[16]);
            document.getElementById('setPOPCT').setAttribute('value',output[17]);
            document.getElementById('setDrug_history').append(output[18]);
            document.getElementById('setMedical_history').append(output[19]);
        }
    });

    $("#send").click(function() {
        if($("#setFirst_Name").val() != "" && $("#setLast_Name").val() != "" && $("#setEmail").val() != "" && $("#setNational_ID").val() != "" && $("#setPhone_Number").val() != "" && $("#setGender").val() != "" && $("#setAge").val() != "" && $("#setWeight").val() != "" && $("#setHeight").val() != "" && $("#setBody_Temperature").val() != "" && $("#setPULSE").val() != "" && $("#setRESPR").val() != "" && $("#setBPSYS").val() != "" && $("#setBPDIAS").val() != "" && $("#setPOPCT").val() != ""){
            $.ajax({
                type: "POST",
                url: "../php/updateData.php",
                data: {
                    oldname: name,
                    First_name: $("#setFirst_Name").val(),
                    Last_name: $("#setLast_Name").val(),
                    Email: $("#setEmail").val(),
                    National_ID: $("#setNational_ID").val(),
                    Phone_Number: $("#setPhone_Number").val(),
                    Gender: $("#setGender").val(),
                    Age: $("#setAge").val(),
                    Weight: $("#setWeight").val(),
                    Height: $("#setHeight").val(),
                    Body_Temperature: $("#setBody_Temperature").val(),
                    PULSE: $("#setPULSE").val(),
                    RESPR: $("#setRESPR").val(),
                    BPSYS: $("#setBPSYS").val(),
                    BPDIAS: $("#setBPDIAS").val(),
                    POPCT: $("#setPOPCT").val(),
                    drug_history: $("#setDrug_history").val(),
                    medical_history: $("#setMedical_history").val(),
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                },
                success: function(output) {
                    console.log(output);
                    if (output == 1) {
                        alert("User name already in use!");
                    }
                    else {
                        alert("Success!");
                        changeURL('homePage.html');
                    }
                }
            });
        }
        else{
            alert("It couldn't be empty!");
        }
    });
});