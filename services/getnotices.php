<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // never, ever cache
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

include 'config.php';

$sql = "SELECT id, title " . 
		"FROM jos_noticeboard " . 
		"WHERE published = 1";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass,array(
           PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
        ));	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);  
	$myNotices = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($myNotices) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>