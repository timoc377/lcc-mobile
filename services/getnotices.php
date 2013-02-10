<?php
include 'config.php';

$sql = "SELECT id, title " . 
		"FROM jos_noticeboard " . 
		"WHERE published = 1";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);  
	$myNotices = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($myNotices) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>