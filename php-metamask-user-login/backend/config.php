<?php 

$servertype = "mysql"; // mysql, pgsql
$servername = "127.0.0.1";
$serverport = 3306; // mysql: 3306, pgsql: 5432
$username = "root";
$password = "";
$dbname = "health_passport";
$tablename = "web3";

try {
        if ($servertype == "pgsql") {
                $dsn = "pgsql:host=$servername;port=$serverport;dbname=$dbname;";
        } elseif ($servertype == "mysql") {
                $dsn = "mysql:host=$servername;port=$serverport;dbname=$dbname;";
        } else {
                die ('DB config error');
        }
        $conn = new PDO($dsn, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
}
catch (PDOException $e) {
        die($e->getMessage());
}
