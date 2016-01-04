<?php
	include('config.php');

	$db = new DB();

	$data = $db->qryFire();

	echo json_encode($data);