<!DOCTYPE html>
<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TaskManager</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="main">
                <div class="adciona">

                    <form id="formTask" class="form">
                        <input type="text" 
                            name="nomeTarefa" 
                            id="task"
                            class="tarefa" 
                            required 
                            placeholder="Nova tarefa">

                        <input type="submit" 
                            id="adciona" 
                            class="submit material-icons" 
                            value="add_circle">
                    </form>

                </div>



                <div class="result" id="conteudos">
                    <!-- Aqui vai o conteúdo aramanezado -->
                </div>
            </div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="js.js"></script>
            <!-- <script src="copy.js"></script> -->
            
        </body>
</html>