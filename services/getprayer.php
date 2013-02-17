<?php
include 'config.php';

$sql = "SELECT id, title, request, DATE_FORMAT(date, '%M %d, %Y') as date " . 
		"FROM jos_prayercenter " .
		"WHERE id = :id";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", $_GET[id]);
	$stmt->execute();
	$myPrayer = $stmt->fetchObject();  
	$dbh = null;
	echo '{"item":'. json_encode($myPrayer) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>
