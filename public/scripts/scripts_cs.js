$(document).ready(function(){


    //ANIMATIONS FOR THE RESULT CARDS//

<<<<<<< Updated upstream
     // $(function(){
=======
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
     //      //----- OPEN
     //    $('[data-modal-open]').on('click', function(e)  {
     //        var targeted_modal_class = jQuery(this).attr('data-modal-open');
     //        $('[data-modal="' + targeted_modal_class + '"]').fadeIn(350);
     //        $('.modal-inner').show(); 
     //            console.log("it works")
     
     //        e.preventDefault();
     //    });
=======
    $(function(){
        
        $('#free').click(function(e){
            $(".cards").toggle("bounce", "slow");
            $(".cards2").toggle("bounce", "slow");
            e.preventDefault();
        });
    
    });


>>>>>>> Stashed changes





    // $('.modal-inner').hide(); 

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















