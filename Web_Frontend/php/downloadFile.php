<?php
    $filename=$_GET['filename'];		//獲取檔名	
    header('content-disposition:attachment;filename='.$filename);	//告訴瀏覽器通過何種方式處理檔案
    header('content-length:'.filesize($filename));	//下載檔案的大小
    readfile($filename);	 //讀取檔案
?>