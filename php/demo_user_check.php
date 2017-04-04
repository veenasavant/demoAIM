<?php
// COPYRIGHT INFOSYS AIM 1.1 2016-2017 

$password = $_GET['password'];
$username = $_GET['username'];

$xml=simplexml_load_file("users.xml") or die("Error: Cannot create object");

foreach($xml->children() as $users) { 
	if ( $username == $users->username ){
		if ($password == $users->password ){
			echo $users->userid; 
			return ;
		}
		else{
			echo -2; // password incorrect 
			return ;
		}
	}
 } // foreach ends
 
 
echo -2; // user not found 
return ;
 
?>