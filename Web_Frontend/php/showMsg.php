<?php
	header('Access-Control-Allow-Origin: *');

	$conn=mysqli_connect("localhost:3306","root","","health_passport");
	mysqli_query($conn,"set names utf8");

    $msg = $_POST['msg'];

    $sql = "SELECT `firstName`, `lastName`, Email, national_id, phoneNumber,
                    GENDER, AGE, `WEIGHT`, HEIGHT, TEMPF,
                    PULSE, RESPR, BPSYS, BPDIAS, POPCT,
                    drug_history, medical_history, health_score FROM `data` WHERE `Name`='$msg'";
    $send = mysqli_query($conn, $sql);
        
    $rs = mysqli_fetch_row($send);
    $num = mysqli_num_rows($send);
    $json_arr =array();

    for($i = 0;$i<$num;$i++){
        $json_arr[$i] = $rs;
        $rs = mysqli_fetch_row($send);
    }

    echo json_encode($json_arr);
?>