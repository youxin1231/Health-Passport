<?php
    $filename=$_GET['filename'];		//獲取檔名	
    $path="../../File_data/".$filename;
    header('content-disposition:attachment;filename='.$filename);	//告訴瀏覽器通過何種方式處理檔案
    header('content-length:'.filesize($path));	//下載檔案的大小
    readfile($path);	 //讀取檔案
?>