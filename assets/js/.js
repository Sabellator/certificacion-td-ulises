var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // FUNCION PARA MENSAJE
  $(function () {
    $("#enviarCorreo").click(function () {
      alert("El mail fue enviado exitosamente.");
    });
  
  
    // FUNCION PARA CAMBIAR COLOR de texto A ROJO
    $('h2').on('dblclick', function(){
      $(this).attr('style', 'color:red; border-color: red !important');
    });
  
  
    // FUNCION PARA OCULTAR TEXTO
    $(".card-title").click(function () {
      $(".card-text, .card-img-top").toggle("slow");
    });
  });
  