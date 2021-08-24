
$(document).ready(function() {

    // Mostra conteúdo
    function getContent() {
        $.ajax({
            url: "../mostrar.php",
            method: 'POST',
            success: function(data) {
                $("#conteudos").html(data);
            }
        });
    }

    getContent();
   

    // Adciona novo conteúdo
    $('#formTask').submit(function(e){
        e.preventDefault();

        var u_task = $("#task").val();

        $.ajax({
            url: '../insere.php',
            dataType: 'JSON',
            type: "POST",
            data: {tarefa: u_task},
            success: function(result){
                
                // console.log(result);
                $("#task").val("");
                getContent();
            }
        });
    });    

    // Apaga conteúdo
    $(document).on("click", ".btn_apagar", function(e){
        e.preventDefault();

        var id = $(this).attr('id');
        // console.log(id);

        $.ajax({
            url: "../deletar.php",
            type: "POST",
            data: {id: id},
            success: function(data) {
                getContent();
                if (data == 0) {
                    alert("Algo deu errado ao deletar!");
                }
            }
        });
    });
});
