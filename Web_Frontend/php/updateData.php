<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost:3306","root","","health_passport");
	mysqli_query($conn,"set names utf8");

    $oldname = $_POST['oldname'];
    $First_name = $_POST['First_name'];
    $Last_name = $_POST['Last_name'];
    $Email = $_POST['Email'];
    $National_ID = $_POST['National_ID'];
    $Phone_Number = $_POST['Phone_Number'];
    $Gender = $_POST['Gender'];
    $Age = $_POST['Age'];
    $Weight = $_POST['Weight'];
    $Height = $_POST['Height'];
    $Body_Temperature = $_POST['Body_Temperature'];
    $PULSE = $_POST['PULSE'];
    $RESPR = $_POST['RESPR'];
    $BPSYS = $_POST['BPSYS'];
    $BPDIAS = $_POST['BPDIAS'];
    $POPCT = $_POST['POPCT'];
    $drug_history = $_POST['drug_history'];
    $medical_history = $_POST['medical_history'];

    $Body_Temperature = (float)$Body_Temperature * (9/5) + 32;

    $sql = "UPDATE `data` SET `firstName`='$First_name', 
                                `lastName`='$Last_name', 
                                `Email`='$Email', 
                                `national_id`='$National_ID', 
                                `phoneNumber`='$Phone_Number', 
                                `GENDER`='$Gender', `AGE`='$Age', 
                                `WEIGHT`='$Weight', `HEIGHT`='$Height', 
                                `TEMPF`='$Body_Temperature', 
                                `PULSE`='$PULSE', 
                                `RESPR`='$RESPR', 
                                `BPSYS`='$BPSYS', 
                                `BPDIAS`='$BPDIAS', 
                                `POPCT`='$POPCT', 
                                `drug_history`='$drug_history', 
                                `medical_history`='$medical_history'
                                WHERE `Name`='$oldname'";
                                
    if(!$send = mysqli_query($conn, $sql)) {
        echo mysqli_error($conn);
    } else {
        echo "success";
    }
?>