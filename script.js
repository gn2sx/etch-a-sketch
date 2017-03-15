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
var color='black';
var eraserOn=false;
var rainbowOn=false;
var rainbowColors=['red','orange','yellow','green','blue','indigo','violet'];
$(document).ready(function(){
  var gridOn=true;
  drawGrid(16);
  $('#clear').click(function(){//clears and resizes the grid
    var gridSize=window.prompt("How large should the sides of the new grid be?",16);
    drawGrid(gridSize);
  });
  $('#eraser').click(function(){
    if(eraserOn){
      color='black';
      eraserOn=false;
    }
    else{
      color='white';
      eraserOn=true;
      rainbowOn=false;
    }
  });
  $('#rainbow').click(function(){
    if(rainbowOn){
      color='black';
      rainbowOn=false;
    }
    else{
      color=rainbowColors[Math.floor(Math.random()*rainbowColors.length)]; //randomly pulls a color form RainbowColors
      rainbowOn=true;
      eraserOn=false;
    }
  });
});

$(document).on('mouseenter','.square',function(){ //Turns squares colors as mouse passes over them
  $(this).css('background-color',color);
  if(rainbowOn){
    color=rainbowColors[Math.floor(Math.random()*rainbowColors.length)];//assings a new random color if RainbowOn is true
  }
});
