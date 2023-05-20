<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost:3306","root","","health_passport");
	mysqli_query($conn,"set names utf8");

    $oldname = $_POST['oldname'];
    $pwd = $_POST['pwd'];
    $mail = $_POST['mail'];
    $gender = $_POST['gender'];
    $color = $_POST['color'];
    $newname = $_POST['newname'];

    $check = "SELECT * FROM `data` WHERE `Name`='$newname'";
    $result = mysqli_query($conn, $check);
    $num = mysqli_num_rows($result);

    if ($num == 0){
        $sql = "UPDATE `data` SET `Password`='$pwd', `Email`='$mail', `Gender`='$gender', `Color`='$color', `Name`='$newname' WHERE `Name`='$oldname'";
        if(!$send = mysqli_query($conn, $sql)) {
            echo mysqli_error($conn);
        } else {
            echo "success";
        }
    }
    else{
        echo 1;
    }
?>