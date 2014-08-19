<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
	

	function logged_in() {
		return isset($_SESSION['user_id']);
//		return isset($_SESSION['user_name']);
//		return isset($_SESSION['user_type']);
//		return isset($_SESSION['group_type']);

	}

	function confirm_logged_in() {
		if (!logged_in()) {
			//redirect_to("login.php");
		}

	}
//	 function verify() {
// 	 	 if($_SESSION['user_type']=='agent'){
//			header('Location:index.php');
//			}
//
// 	 }


?>
