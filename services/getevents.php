<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // never, ever cache
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

include 'config.php';

$sql = "SELECT detail.evdet_id AS id, IFNULL(detail.summary,'') AS title, IFNULL(DATE_FORMAT(repetition.startrepeat,'%b %e'),'') AS dates, IFNULL(DATE_FORMAT(repetition.endrepeat,'%b %e'),'') AS enddates, IFNULL(TIME_FORMAT(repetition.startrepeat,'%l:%i %p'),'') AS times, IFNULL(TIME_FORMAT(repetition.endrepeat,'%l:%i %p'),'') AS endtimes, detail.location, detail.extra_info AS datdescription, ics.label " . 
		"FROM z7njt_jevents_vevdetail detail JOIN z7njt_jevents_repetition repetition " . 
			"ON detail.evdet_id = repetition.eventid " . 
  			"JOIN z7njt_jevents_vevent event ON detail.evdet_id = event.ev_id " . 
			"JOIN z7njt_jevents_icsfile ics ON ics.ics_id = event.icsid " . 
  		"WHERE repetition.startrepeat >= curdate() " .
		"AND detail.state = 1 " .
		"ORDER BY repetition.startrepeat";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass,array(
           PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
        ));	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);  
	$myEvents = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($myEvents) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>