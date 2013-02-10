<?php
include 'config.php';

$sql = "SELECT jee.id, IFNULL(jev.venue,'') AS venue, jec.catname, IFNULL(DATE_FORMAT(jee.dates,'%b %e'),'') AS dates, IFNULL(DATE_FORMAT(jee.enddates,'%b %e'),'') AS enddates, IFNULL(TIME_FORMAT(jee.times,'%l:%i %p'),'') AS times, IFNULL(TIME_FORMAT(jee.endtimes,'%l:%i %p'),'') AS endtimes, jee.title, jee.datdescription " . 
		"FROM jos_eventlist_events jee " . 
			"LEFT OUTER JOIN jos_eventlist_venues jev " . 
  				"ON jee.locid = jev.id " . 
			"LEFT OUTER JOIN jos_eventlist_categories jec " . 
  				"ON jee.catsid = jec.id " .
		"WHERE jee.published = 1 " .
		"ORDER BY id";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);  
	$myEvents = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($myEvents) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>