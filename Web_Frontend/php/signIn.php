<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost:3306","root","","health_passport");
	mysqli_query($conn,"set names utf8");

    $msg = $_POST['msg'];
    $pwd = $_POST['pwd'];


    $sql = "SELECT * FROM `data` WHERE `name`='$msg' AND `password`='$pwd'";
    $send = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($send);
    echo $num;
?>