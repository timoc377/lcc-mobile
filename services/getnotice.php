<?php
include 'config.php';

$sql = "SELECT *" . 
		"FROM jos_noticeboard " .
		"WHERE id = :id";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", $_GET[id]);
	$stmt->execute();
	$myEvent = $stmt->fetchObject();  
	$dbh = null;
	echo '{"item":'. json_encode($myEvent) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>