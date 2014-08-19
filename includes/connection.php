<?php
	ob_start();
	if(!isset($_SESSION)){session_start();}

	// error_reporting(0);

	// set_error_handler('error_handler',E_ALL);

	$db = new mysqli("172.16.0.87", "devteam", "d3vt3@m", "go_local");
	$db2 = new mysqli("172.16.0.87", "devteam", "d3vt3@m", "golocal");

	$datetoday = date("Y-m-d");
	
	$dateandtimetoday = date("Y-m-d h:i:s");
?>
