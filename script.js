function drawGrid(size){
  $('#grid').empty();
  //Set square dimensions to fit inside container, rounding down
  var squareSize=Math.floor(500/size);
  console.log(squareSize);
  for(row=1;row<=size;row++){ //drawing the grid
      $('#grid').append('<tr class="grid-row"></tr>');
    }
  for(column=1;column<=size;column++){
    $('.grid-row').append('<td><div class="square"></div></td>')
  }
  $('.square').css('height',squareSize+"px");
  $('.square').css('width',squareSize+"px");
}
$(document).ready(function(){
  drawGrid(16);
  $('#clear').click(function(){//clears and resizes the grid
    var gridSize=window.prompt("How large should the sides of the new grid be?",16);
    drawGrid(gridSize);
  });
});

$(document).on('mouseenter','.square',function(){ //Turns squares red as mouse passes over them
  $(this).css('background-color','red');
});
