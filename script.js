$(document).ready(function(){
  for(row=0;row<16;row++){ //drawing the grid
    for(column=0;column<16;column++){
      $('#container').append('<div class="square"></div>')
    }
    $('#container').append('<br>');
  }
});
$(document).on('mouseenter','.square',function(){ //Turns squares red as mouse passes over them
  $(this).css('background-color','red');
});
