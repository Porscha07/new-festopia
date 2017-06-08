$(document).ready(function(){


    // TEXT GENERATOR FOR THE CAT PAGES //
    setInterval(blinker, 1000); //Runs every second
    function blinker() {
        $('#upright-typing-cursor').fadeOut(500).fadeIn(500);
    }
    setInterval(typeItOut, 15000); //Runs every 15 seconds
    function typeItOut(){
    $('#typing-header').html('');

    var headerSentence = ('Learn to code. Launch a career. ');
    // Could change the sentence here with a random like so
    headerSentence = headerArray[headerCounter];

    setTimeout(
      function(){
        for(var i = 0; i < headerSentence.length; i++){
          (function(index) {
            setTimeout(function() {
              document.getElementById('typing-header').innerHTML+=headerSentence[index];
            }, 50 * i);
          })(i);
        }
      }, 1000);
    }


    //ANIMATIONS FOR THE RESULT CARDS//

<<<<<<< Updated upstream
    $(function(){
=======

     // $(function(){

    $(function(){

>>>>>>> Stashed changes
        
        $('#family').click(function(e){
            $(".cards").toggle("bounce", "slow");
            $(".cards2").toggle("bounce", "slow");
                // console.log("it works") 
            e.preventDefault();
        });
    });

<<<<<<< Updated upstream
=======

     //      //----- OPEN
     //    $('[data-modal-open]').on('click', function(e)  {
     //        var targeted_modal_class = jQuery(this).attr('data-modal-open');
     //        $('[data-modal="' + targeted_modal_class + '"]').fadeIn(350);
     //        $('.modal-inner').show(); 
     //            console.log("it works")
     
     //        e.preventDefault();
     //    });

>>>>>>> Stashed changes
    $(function(){
        
        $('#free').click(function(e){
            $(".cards").toggle("bounce", "slow");
            $(".cards2").toggle("bounce", "slow");
            e.preventDefault();
        });
    
    });

<<<<<<< Updated upstream
=======






    // $('.modal-inner').hide(); 

>>>>>>> Stashed changes
       	//MODALS FOR LOGIN/CREATE ACCOUNT
    $(function(){
        
       	  //----- OPEN
        $('[data-modal-open]').on('click', function(e)  {
            var targeted_modal_class = jQuery(this).attr('data-modal-open');
            $('[data-modal="' + targeted_modal_class + '"]').fadeIn(350);
            $('.modal-inner').show(); 
            	console.log("it works")
            e.preventDefault();
        });
     
        //----- CLOSE
        $('[data-modal-close]').on('click', function(e)  {
            var targeted_modal_class = jQuery(this).attr('data-modal-close');
            $('[data-modal="' + targeted_modal_class + '"]').fadeOut(350);
            e.preventDefault();
        });
    });


    // $('.modal-inner1').hide(); 

       	//MODALS FOR SEARCH 
    $(function(){

       	  //----- OPEN
        $('[data-modal-open1]').on('click', function(e)  {
            var targeted_modal_class1 = jQuery(this).attr('data-modal-open1');
            $('[data-modal1="' + targeted_modal_class1 + '"]').fadeIn(350);
            $('.modal-inner1').show(); 
            	console.log("it works")
            e.preventDefault();
        });
     
        //----- CLOSE
        $('[data-modal-close1]').on('click', function(e)  {
            var targeted_modal_class1 = jQuery(this).attr('data-modal-close1');
            $('[data-modal1="' + targeted_modal_class1 + '"]').fadeOut(350);
            	console.log("it works")
            e.preventDefault();
        });
    });


    // $('.modal-inner2').hide();
       	//MODALS FOR QUESTIONS 
    $(function(){

       	  //----- OPEN
        $('[data-modal-open2]').on('click', function(e)  {
            var targeted_modal_class2 = jQuery(this).attr('data-modal-open2');
            $('[data-modal2="' + targeted_modal_class2 + '"]').fadeIn(350);
            $('.modal-inner2').show(); 
            	console.log("it works")
            e.preventDefault();
        });
     
        //----- CLOSE
        $('[data-modal-close2]').on('click', function(e)  {
            var targeted_modal_class2 = jQuery(this).attr('data-modal-close2');
            $('[data-modal2="' + targeted_modal_class2 + '"]').fadeOut(350);
            	console.log("it works")
            e.preventDefault();
        });
    });
}); 















