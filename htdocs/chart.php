<?php

$pdo = new PDO('mysql:host=localhost;dbname=humidade;port=3306;charset=utf8', 'root', 'root');

$sql = "SELECT temperature,humidity,dia FROM dht22 ORDER BY dia DESC LIMIT 6";

$statement = $pdo->prepare($sql);

$statement->execute();

while($results = $statement->fetch(PDO::FETCH_ASSOC)) {

    $result[] = $results;
}

$organizado = array_reverse($result);

echo json_encode($organizado);