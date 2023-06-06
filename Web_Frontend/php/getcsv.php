
<?php
    exec('cd ../python 2>&1 && python3 getcsv.py 2>&1');
    $output = exec('cd ../python && python3 health-score.py');
    echo $output;
?>
