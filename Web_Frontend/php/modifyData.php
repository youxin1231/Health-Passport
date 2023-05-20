<?php
	header('Access-Control-Allow-Origin: *');

	$conn=mysqli_connect("localhost:3306","root","","health_passport");
	mysqli_query($conn,"set names utf8");

    $msg = $_POST['msg'];

    $sql = "SELECT `Password`, Email, Gender, Color, `Name` FROM `data` WHERE `Name`='$msg'";
    $send = mysqli_query($conn, $sql);

    $rs = mysqli_fetch_row($send);

    echo json_encode($rs);
?>