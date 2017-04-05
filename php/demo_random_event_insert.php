<?php
$date_time = $_GET['date_time'];
$event_type = $_GET['event_type'];
$user_id = $_GET['user_id'];
$ch_id = $_GET['ch_id'];
$ch_desc = $_GET['ch_desc'];
$rating_issue = $_GET['rating_issue'];

// Parse without sections
$ini_array = parse_ini_file("config.ini");
$myfile = fopen($ini_array[OUTPATH], "a+") or die("Unable to open output file!");
$txt=$date_time.",".$event_type.",".$user_id.",".$ch_id.",".$ch_desc.",".$rating_issue."\n";

echo $txt;
fwrite($myfile, $txt);
fclose($myfile);
?>