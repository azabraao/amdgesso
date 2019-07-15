$(document).ready(function(){
        $(function(){
            $(".ajaxForm").submit(function(e){
                e.preventDefault();
                var href = $(this).attr("action");
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: href,
                    data: $(this).serialize(),
                    beforeSend:function(){
                        $("#btn-submit").addClass('is-loading');
                    },
                    success: function(response){
                        if(response.status == "success"){
                            $('#btn-submit').addClass('btn-success');
                            $('#btn-submit').html('Enviado!');
                            $('.ajaxForm')[0].reset();                            
                        }else{
                            $('#btn-submit').addClass('btn-danger');
                            $('#btn-submit').html('Ops! Algo ocorreu. Use o chat!');
                            $('.ajaxForm')[0].reset();                            
                        }
                    },
                    complete: function(){
                        $("#btn-submit").removeClass('is-loading');
                        setTimeout("$('#btn-submit').removeClass('btn-danger');",3000);
                        setTimeout("$('#btn-submit').removeClass('btn-success');",3000);
                        setTimeout(" $('#btn-submit').html('Enviar');",3000);
                    }
                });
            });
        });
});