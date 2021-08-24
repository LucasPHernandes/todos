
<div class="conteudo">

<?php

    $conn = mysqli_connect('localhost', 'root', '', 'todolist_sql');

    $sql = "SELECT * FROM tarefas";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {

?>

    <li>
        <span class="text"><?php echo $row['conteudo']; ?></span>
        <input type="button" class="btn_apagar material-icons" value="delete" id="<?php echo $row['id']?>">
        
    </li>

    
<?php
}

    echo '</div><div class="pending-text">Você ainda possuí ' . mysqli_num_rows($result) . ' tarefas para fazer.</div>';
    
    } else {
        echo "<li><span class='text'>Nenhuma tarefa registrada.</span></li>";
    }

?>

