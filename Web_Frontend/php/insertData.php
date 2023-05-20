<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost:3306","root","","health_passport");
	mysqli_query($conn,"set names utf8");

    $msg = $_POST['msg'];
    $pwd = $_POST['pwd'];
    $mail = $_POST['mail'];
    $color = $_POST['color'];
    $gender = $_POST['gender'];


    $sql = "INSERT INTO `data` (`name`, `Password`, `Email`, `Gender`, `Color`) VALUES ('$msg', '$pwd', '$mail', '$gender', '$color');";
    $send = mysqli_query($conn, $sql);
?>