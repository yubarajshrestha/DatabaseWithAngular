<?php
	define("__HOST__", "localhost");
	define("__USER__", "root");
	define("__PASS__", "meAxel9@4!");
	define("__BASE__", "project");

	class DB {
		private $con = false;
		private $data = array();

		public function __construct() {
			$this->con = new mysqli(__HOST__, __USER__, __PASS__, __BASE__);
			
			if($this->con->connection_error) {
				die("DB connection failed:" . $con->connection_error);
			}
		}

		public function qryPop() {
			$sql = "SELECT * FROM `blogs` ORDER BY `id` DESC";
			$qry = $this->con->query($sql);
			if($qry->num_rows > 0) {
				while($row = $qry->fetch_object()) {
					$this->data[] = $row;
				}
			} else {
				$this->data[] = null;
			}
			$this->con->close();
		}

		public function qryFire($sql=null) {
			if($sql == null) {
				$this->qryPop();
			} else {
				$this->con->query($sql);
				$this->qryPop();	
			}
			$this->con->close();
			return $this->data;
		}
	}
?>