<?php

    $pdo = new PDO("mysql:dbname=todolist_sql;host=127.0.0.1","root","");

    $id = $_POST['id'];

    $sql = $pdo->query("DELETE FROM `tarefas` WHERE `tarefas`.`id` = $id");
    
    if($sql->rowCount() >= 1) {
        echo json_encode($sql->fetchAll(PDO::FETCH_ASSOC));
        // echo json_encode($id);
    }else{
        echo json_encode("Falha");

    }

    if($sql) {
        echo 1;
    } else {
        echo 0;
    }


    
?>