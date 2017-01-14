/**
 * Pierce Gresham
 * 1-13-2016
 * A jquery practice script
 */

// There are two ways to use the ready() function
// Below are both ways

// Way 1
// $(document).ready(function() {

// Way2
$(function(){

	// create accordion effect using jQuery UI plugin
	$("#accordion").accordion();

	// adjust stylel
	$("#accordion").css("margin-bottom", "2em");
	
	$("textarea").css("margin-top", "1em");
	

	// add listener to name button
	$("#name-button").click(function(){
		if ($("#your-name").val() === "") {
			alert("its blank!")
		}
		else {
			$("textarea").text($("#your-name").val());
			$("#your-name").val("");
		}
	});

	// add button element using pure JS
	var b = document.createElement('input');
	b.setAttribute("type", "button");
	b.value = "button 2";
	var body = document.getElementById("body");
	body.appendChild(b);

	// do the same with jQuery
	var c = document.createElement("input");
	c.value = 'button 3';
	c.setAttribute("id", "button3");
	//body.appendChild(c);
	$('body').append(c);
	// set input type with query
	$("#button3").attr("type", "button"); 
	$("#button3").css("background-color", "green");
	// add listener with query
	var but3 = $("#button3");
	but3.click(function(){
		alert('event listener for button 3');
	});
	but3.mouseover(function(){
		but3.css("background-color", "red");
	});
	but3.mouseleave(function(){
		but3.css("background-color", "green");
	});
	
	// hide stuff button 
	var hbtn = $("#hbtn");
	var hspan = $("p");
	hbtn.click(function(){
		hspan.toggle(2000);
			});

});





