<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost:3306","root","","health_passport");
	mysqli_query($conn,"set names utf8");

    $msg = $_POST['msg'];
    $pwd = $_POST['pwd'];
    $mail = $_POST['mail'];
    $national_id = $_POST['national_id'];


    $sql = "INSERT INTO `data` (`name`, `Password`, `Email`, `national_id`) VALUES ('$msg', '$pwd', '$mail', '$national_id');";
    $send = mysqli_query($conn, $sql);
?>