<?php

    if(isset($_FILES['file']['name'])){

        /* Getting file data */   
        $filename = $_FILES['file']['name'];
        $filesize = $_FILES['file']['size'];

        $name = $_POST['name'];


        date_default_timezone_set("Asia/Taipei"); 
        $timestamp = date('Y-m-d H:i:s');

        /*send to MySql*/
        header('Access-Control-Allow-Origin: *');

        $conn=mysqli_connect("localhost:3306","root","","health_passport");
        mysqli_query($conn,"set names utf8");

        $result = mysqli_query($conn, "SELECT * FROM `file` WHERE `Name`='$filename' AND `User`='$name'");
        $num = mysqli_num_rows($result);
        if ($num != 0){
            echo 1;
            exit;
        }
        $sql1 = "INSERT INTO `file` (`User`, `Name`, `Size`, `TimeStamp`) VALUES ('$name', '$filename', '$filesize', '$timestamp');";
        $send = mysqli_query($conn, $sql1);

        /*upload to local computer*/
        /* Location */   $location = "D://xampp/htdocs/WebPractice/".$filename;
        $imageFileType = pathinfo($location,PATHINFO_EXTENSION);
        $imageFileType = strtolower($imageFileType);

        $response = 0;
        if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
            $response = $location;
        }

        echo $response;
        exit;
    }

    echo 0;
?>