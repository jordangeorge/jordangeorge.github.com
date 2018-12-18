<?php

// variables
$host = "localhost"; // server name
$username = "root"; // account name
$user_password = ""; // login password
$db_in_use = "test"; // name of database to use

// establish connection to the database
$conn = new mysqli($host, $username, $user_password, $db_in_use);

// error checking
if ($conn->connect_errno) {
  echo "Failed to connect to MySQL: (" . $conn->connect_errno . ")" . $conn->connect_error;
}
// echo $conn->host_info . "\n";

?>
