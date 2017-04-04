<?php
// COPYRIGHT INFOSYS AIM 1.1 2016-2017 

$event_type = $_GET['event_type'];
$user_id = $_GET['user_id'];
$ch_id = $_GET['ch_id'];
$ch_desc = $_GET['ch_desc'];

// Parse without sections

$ini_array = parse_ini_file("config.ini");

$myfile = fopen($ini_array[OUTPATH], "a+") or die("Unable to open output file!");

// TimeStamp,Event_type,User_Id, Ch_id, Ch_desc, Rating=0 

$txt=date("Y-m-d H:i:s").",".$event_type.",".$user_id.",".$ch_id.",".$ch_desc.","."0"."\n";

echo $txt;

fwrite($myfile, $txt);
fclose($myfile);
?>