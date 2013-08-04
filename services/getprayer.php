<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // never, ever cache
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

include 'config.php';

$sql = "SELECT *" . 
		"FROM jos_prayercenter " .
		"WHERE id = :id";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass,array(
           PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
        ));	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", $_GET['id']);
	$stmt->execute();
	$myPrayer = $stmt->fetchObject();  
	$dbh = null;
	$result = '{"item":'. json_encode($myPrayer) .'}';
	$result = strip_tags($result);
	echo $result;
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>