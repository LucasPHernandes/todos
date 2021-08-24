
$(function() {
   

    $(document).ready(function() {
        // Show Tasks
        function loadTasks() {
            $.ajax({
                url: "../mostrar.php",
                type: "POST",
                success: function(data) {
                    $("#tasks").html(data);
                }
            });
        }

        loadTasks();

        // Add Task
			$("#adciona").on("click", function(e) {
				e.preventDefault();

				var task = $("#task").val();

				$.ajax({
					url: "../insere.php",
					type: "POST",
					data: {task: task},
					success: function(data) {
						loadTasks();
						$("#task").val('');
						if (data == 0) {
							alert("Something wrong went. Please try again.");
						}
					}
				});
			});

			// Remove Task
			$(document).on("click", "#removeBtn", function(e) {
				e.preventDefault();
				var id = $(this).data('id');
				
				$.ajax({
					url: "remove-task.php",
					type: "POST",
					data: {id: id},
					success: function(data) {
						loadTasks();
						if (data == 0) {
							alert("Something wrong went. Please try again.");
						}
					}
				});
			});
		});
    }















//     // Adciona novo conteúdo
//     jQuery('#formTask').submit(function(e){
//         e.preventDefault();

//         var u_task = $("#task").val();

//         $.ajax({
//             url: '../insere.php',
//             dataType: 'JSON',
//             type: "POST",
//             data: {tarefa: u_task},
//             success: function(result){
                
//                 // console.log(result);
//                 $("#task").val("");
//                 getContent();
//             }
//         });
//     });    

//     // Apaga conteúdo
//     $(function(){
//         $('.btn_apagar').on("click", function(){
//             var u_id = $(this).attr('id');
//             console.log(u_id);
//             // alert(u_id);

//             $.ajax({
//                 url: '../deletar.php',
//                 dataType: 'JSON',
//                 method: 'POST',
//                 data: {id: u_id},
//                 success: function(result) {
//                     console.log(u_id);
//                     getContent();
//                 }
//             });
            
//             // $.ajax({
//             //     url: '../deletar.php',
//             //     dataType: 'JSON',
//             //     method: 'GET',
//             //     data: {id: u_id},
//             //     success: function(result) {
//             //         // console.log(result);
//             //         getContent();
//             //     }
//             // });
//         });
//     });
// });




// // Função para mostrar conteúdo
// function getContent() {
//     $.ajax({
//         url: "../mostrar.php",
//         method: 'GET',
//         dataType: 'JSON',
//     }).done(function(result){
//         console.log(result);

//         var box_comm = document.querySelector('.result');
//         while(box_comm.firstChild){
//             box_comm.firstChild.remove();
//         }
        
//         for(var i = 0; i < result.length; i++) {
//             $('.result').prepend('' + result[i].conteudo + '<input type="button" class="btn_apagar" id="' + result[i].id + '" value="Apagar"><br>');
//         }
            

//     });
// }

// getContent()