<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$retries = 5;
while ($retries--) {
    $conn = @new mysqli('db', 'root', 'secret', 'mydb');
    if (!$conn->connect_error) break;
    sleep(3);
}

if ($conn->connect_error) {
    echo json_encode(["error" => $conn->connect_error]);
    exit;
}

$result = $conn->query("SELECT 'Hello from MySQL' AS message");
$row = $result->fetch_assoc();
echo json_encode($row);
