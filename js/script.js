

$(function(){

	$('#play').click(function() {

		
			/* $('#play').css('background-color', '#6BC7B0'); */
		$('#slider').cycle('resume'); return false; 

	});

	$('#pause').click(function() {

		
			/* $('#pause').css('background-color', '#6BC7B0'); */
		
		$('#slider').cycle('pause'); return false; 

	});

    
	$('#slider').cycle({

		fx: 		'scrollHorz',
		next: 		'#next',
		prev: 		'#prev',
		pager: 		'#pager',
		timeout: 	3000, 
		speed: 		900
	});


});




// script for ordering icons form 
/*
var expanded1 = false;
var expanded2 = false;
var checkboxes = document.getElementById("checkboxes");
var sizeCheckboxes = document.getElementById("size-checkboxes");
var selectBox = document.getElementsByClassName('select-box')[0];
var selectBox2 = document.getElementsByClassName('select-box')[1];

function showCheckboxes(checkboxes, expanded) {
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

selectBox.addEventListener('click', function(e) {
	showCheckboxes(checkboxes, expanded1)}, false);

selectBox2.addEventListener('click', function(e) {
	showCheckboxes(sizeCheckboxes, expanded2)}, false);

*/










