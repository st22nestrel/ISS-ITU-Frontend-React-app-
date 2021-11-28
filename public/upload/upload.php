<?php
$target_dir = "files/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if (file_exists($target_file)) {
    echo "<html><body><h1>Zmente prosim nazov suboru, dany subor uz existuje!</h1></body></html>";
    $uploadOk = 0;
}

if ($_FILES["fileToUpload"]["size"] > (100 * 1024 * 1024)) { 
    echo "<html><body><h1>Prilis velky subor!</h1></body></html>";
    $uploadOk = 0;
}

if ($uploadOk != 0) {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
	echo "<html><h1>Subor uspesne nahrany na server. Adresa suboru: <br><br>http://iisprojekt.fun/upload/files/". basename( $_FILES["fileToUpload"]["name"])."</h1></html>";
    } else {
        echo "<html><body><h1>Nastala chyba pri uploade, skuste to znovu</h1></body></html>";
    }
}
?>
<meta http-equiv="refresh" content="5; url=http://iisprojekt.fun/" />