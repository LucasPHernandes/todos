<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TodoLists</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="adciona">

            <form id="formTask">
                <input type="text" name="nomeTarefa" id="task" class="tarefa" >
                <input type="submit" class="submit" value="Adicionar">
            </form>

        </div>

        <button class="mostrando">Mostrar</button>

        <div class="result"></div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="script.js"></script>
    </body>
</html>