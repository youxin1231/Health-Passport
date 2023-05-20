<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost:3306","root","","health_passport");
	mysqli_query($conn,"set names utf8");

    $msg = $_POST['msg'];


    $sql = "SELECT * FROM `data` WHERE `name`='$msg'";
    $send = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($send);
    echo $num;
?>