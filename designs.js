$(document).ready(function(){

$("#sizePicker").submit(function(e){
	e.preventDefault()

	$("#pixelCanvas").html('')

	//variables for DOM
	var rows=$("#inputHeight").val();
	var cols=$("#inputWeight").val();

	makeGrid(rows, cols);

	//Drawing in a cell
	$(".point").click(function(event){
		var color=$("#colorPicker").val();
		$(event.target).css('background-color',color);
		});
	});
})



function makeGrid(rows, cols){
	var i=1;
	while(i<=rows)
	{
		$("#pixelCanvas").append('<tr> </tr>');
		for(var j=0;j<=cols;j++)
		{
			$('tr:last').append('<td ></td>');
			$('td').attr('class','point');
		}
		i++
	}
}