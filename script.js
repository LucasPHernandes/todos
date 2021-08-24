
$(function(){
    // mostra conteúdo armazenado
    $(".mostrando").on("click", function(){
        $.ajax({
            url: "mostrar.php",
            success: function(result){
                $(".result").html(result);
            },
        });
    });


    
    // Adciona novo conteúdo
    jQuery('#formTask').submit(function(e) {

        e.preventDefault();
       
        var u_task = $("#task").val(); /// <<<<<
        // alert(u_task);

        jQuery.ajax({

            url : 'insere.php',
            dataType : 'JSON',
            type : "POST",
            data : {tarefa: u_task},
            success : function(result) {
                console.log(result);
                // alert(response.message);
                if (response.success == 1) {
                } else {
                    //deu ruim,zé
                    console.log("Algo de errado, não está certo...");
                }
            }
        });
        $("#task").val("");
    });
});