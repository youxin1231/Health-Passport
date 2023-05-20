<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost:3306","root","","health_passport");
	mysqli_query($conn,"set names utf8");

    $fname = $_POST['fname'];
    $user = $_POST['user'];
    $newfname = $_POST['newfname'];

    date_default_timezone_set("Asia/Taipei"); 
    $timestamp = date('Y-m-d H:i:s');

    $sql = "UPDATE `file` SET `Name`='$newfname', `TimeStamp`='$timestamp' WHERE `Name`='$fname' AND `User`='$user';";
    $result = mysqli_query($conn, $sql);
    $file = 'D:\xampp\htdocs\WebPractice\'' + $fname;
    $rename = 'D:\xampp\htdocs\WebPractice\'' + $newfname;
    rename($file,$rename);
?>