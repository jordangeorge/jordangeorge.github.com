<?php

function show_records($sql) {
  include "connect_to_db.php";

  $result = $conn->query($sql); // executes query

  // if more than one record
  if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
      echo "id: " . $row["id"] . "<br>" . "name: " . $row["name"] . "<br><br>";
    }
  } else {
    // no records found
    echo "0 results";
  }

  close_conn($conn);
}


// close connection
function close_conn($conn) {
  $conn->close();
}

?>
