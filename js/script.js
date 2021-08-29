




// jquery start
// click to get alert
$(document).ready(function(){
   $('#btx').click(function(){
       alert('You have successfully done it');
   })
});

// click to text change

$(document).ready(function(){
    $('#bty').click(function(){
        $('#hh1').html('welcome to jquery');
    });
    $('#btyReset').click(function(){
        $('#hh1').html('Welcome to SSB');
    });
});


// text color change

$(document).ready(function(){
    
    $('#btz').click(function(){
        $('#hh2').css({'color':'red', 'font-size':'50px'});
        $('#pp1').css({'color':'red', 'font-size':'20px'});

    });
    $('#btzReset').click(function(){
        $('#hh2').css({'color':'#212529', 'font-size':'32px'});
        $('#pp1').css({'color':'#212529', 'font-size':'16px'});
    });
    
    // img change

    $('#bta').click(function(){
        $('#imga').hide();
    });
    $('#btaReset').click(function(){
        $('#imga').show();
    });
    $('#toggle').click(function(){
        $('#imga').toggle();
    });

    // fade in

    $('#btf').click(function(){
        $('#div1').fadeIn();
        $('#div2').fadeIn('slow');
        $('#div3').fadeIn('3000');

    });
    // fadeOut
    $('#btf2').click(function(){
        $('#div1').fadeOut();
        $('#div2').fadeOut('slow');
        $('#div3').fadeOut('3000');
        

    });
    // fadeToggle
    $('#btf3').click(function(){
        $('#div1').fadeToggle();
        $('#div2').fadeToggle('slow');
        $('#div3').fadeToggle('3000');
    });
    // fadeTo
    
    $('#btf4').click(function(){
        $('#div1').fadeTo(1000, 1);
        $('#div2').fadeTo( 1000, .5);
        $('#div3').fadeTo(1000, .2);
    })

    //    slideDown

    $( "#toggleHere" ).click(function() {
       $('#content').slideDown(500);
       
    });
    $( "#toggleUp" ).click(function() {
        $('#content').slideUp();
        
     });

     $( "#toggleHere2" ).click(function() {
        $('#content').slideToggle();
        
    });


    
    // click function with slide Up
    
     $('.pp-1').click(function(){
         $(this).slideUp();
    })
     
    // mouse hover

    $( "#le" ).hover(
        function() {
          $( this ).append( $( "<span> ***</span>" ) );
        }, function() {
          $( this ).find( "span" ).last().remove();
        }
      );
      $( "#le2" ).hover(
        function() {
          $( this ).append( $( "<span> ***</span>" ) );
        }, function() {
          $( this ).find( "span" ).last().remove();
        }
      );
      $( "#le.fadez" ).hover(function() {
       
        $( this ).fadeOut( 500 );
        $( this ).fadeIn( 1000 );
    });
    // Focus

    $('#inp').focus(function () {
      $(this).next('span').css('display', 'inline').fadeOut(1000);
    });
    $('#inpz').focus(function () {
        $(this).next('span').css('display', 'inline').fadeOut(1000);
    });

});



$(document).ready(function () {
    $( function() {
        
        $( "#accordion" ).accordion();
        
    });

    // auto select

    $(function(){
        var avTags=["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure","COBOL",
        "ColdFusion","Erlang",];
        $('#autoFill').autocomplete({
            source: avTags
        });
    });

    // menu
    $( function() {
        $( "#menu" ).menu();
    } );

    // select-menu
    $(function(){
        var circle = $('#circle');
        $('#radius').selectmenu({
            change: function(event,data){
                circle.css({
                    width: data.item.value,
                    height:data.item.value
                });
    
            }
        });
    
        $('#color').selectmenu({
            change: function(event, data){
                circle.css('background', data.item.value)
            }
        });
    });

    //tab with mouse hover

    $(function(){
        $('#tabs').tabs({
            event: 'mouseover'
        });
    });


    //Dialog

    $(function(){
        $('#dialog').dialog({
            autoOpen: false,
            show:{
                effect:'blind',
                duration:'1000'
            },

            hide:{
                effect: 'explode',
                duration: '1000'
            }

        });

        $('#opener').on('click', function(){
            $('#dialog').dialog('open');
        });
    });

    // date picker

   $(function(){
    $('#datepicker').datepicker();
   });
    
    //draggable
    $(function(){
        $('#draggable').draggable({scroll:true});
        $('#draggable2').draggable({scroll:true, scrollSensitivity: 100});
        $('#draggable3').draggable({scroll:true, scrollSpeed: 100});
    });

    // droppables
    
})














