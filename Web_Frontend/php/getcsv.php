
<?php
    exec('cd C:/wamp64/www/Health-Passport/Web_Frontend/python 2>&1 && C:/Python38/python getcsv.py 2>&1');
    $output = exec('cd C:/wamp64/www/Health-Passport/Web_Frontend/python && C:/Python38/python health-score.py');
    // var_dump( 'success');
    echo $output;
    // echo $result;
    // $result = exec('cd C:/wamp64/www/Health-Passport/Web_Frontend/python && C:/Python38/python health-score.py')
    
?>
