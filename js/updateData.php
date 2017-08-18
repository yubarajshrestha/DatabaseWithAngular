<?php
	$data = json_decode(file_get_contents("php://input"));

	include('config.php');

	$db = new DB();
	
	$sql = "UPDATE `blogs` SET `title` = '$data->title', `description` = '$data->description' WHERE `id` = '$data->id'";

	$data = $db->qryFire($sql);

	echo json_encode($data);
