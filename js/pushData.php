<?php
	$data = json_decode(file_get_contents("php://input"));

	include('config.php');

	$db = new DB();
	
	$sql = "INSERT INTO `blogs`(`title`,`description`)VALUES('$data->title','$data->description')";

	$data = $db->qryFire($sql);

	echo json_encode($data);
