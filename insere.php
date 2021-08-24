<?php

    $pdo = new PDO("mysql:dbname=todolist_sql;host=127.0.0.1","root","");
    // $con = mysqli_connect('localhost', 'root', '', 'todolist_sql');

    $tarefa = $_POST['tarefa'];

    $sql1 = $pdo->query("INSERT INTO `tarefas` (`conteudo`) VALUES ('$tarefa')");
    // $result = mysqli_query($con, $sql);

    if($sql1->rowCount() >= 1) {
        echo json_encode($sql1->fetchAll(PDO::FETCH_ASSOC));
    }else{
        echo json_encode("Algo errado ao inserir");
    }
?>