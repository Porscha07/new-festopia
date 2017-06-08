$(document).ready(function() {

var state = {
  stage: 1
};

var totalStages = 7;


function reducer(action,state) {
  switch(action) {
    case 'NEXT_STAGE':
        return state + 1
        break;
    case 'PREVIOUS_STAGE':
        return state - 1
        break;
    default:
      return state
  }
}

function getInputState() {
  var isValid = true;
  if($("li[data-stage="+state.stage+"] input").val() === '') { isValid = false }
  return isValid;
}

function showErrorMessage() {
  $(".alerta").addClass('erro-activo');
}

function setFormState(isValid,action) {
  if( !isValid ) {
    showErrorMessage();
  } else {
    if(state.stage < totalStages ) {
        // change indicator state & inputs
    $("li[data-stage="+state.stage+"]").removeClass('selected');
			
			$("li[data-stage="+state.stage+"]").addClass('done');
			
			
    state.stage = reducer(action,state.stage);
    $("li[data-stage="+state.stage+"]").addClass('selected');
	
    $("li[data-stage="+state.stage+"]").removeClass('done');
			
      $(".alerta").removeClass('erro-activo');
    
    // alterar o contador
    $('.counter span').html(state.stage);
    $('.progress-bar').width((100/totalStages) * state.stage   + '%');
    }
		
    
  

    
  }
}

  // attach event handlers to the document
  $('#nextStage').click(function(event) {
    setFormState(getInputState(),'NEXT_STAGE');
  });
  $(document).keypress(function(event) {
    if(event.which === 13) {
      setFormState(getInputState(),'NEXT_STAGE');
    }
  });
  $('nav li').click(function(event) {
    if ( $(this).data('stage') > state.stage ) {
      setFormState(getInputState(),'NEXT_STAGE');
    } else {
      setFormState(getInputState(),'PREVIOUS_STAGE');
    }
  });
  
});
  