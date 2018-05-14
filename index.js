$(document).ready(function(){

	$("#item1").show()
	$("#item2").hide()
	$("#item3").hide()

	
	// toggling function for link1
	$("#link1").click(function(){
		$("#item1").slideToggle()
	})
	$("#link1").click(function(){
		$("#item2").hide()
	})
	$("#link1").click(function(){
		$("#item3").hide()
	})


	// toggling function for link2
	 $("#link2").click(function(){
		$("#item2").slideToggle()
	})
	$("#link2").click(function(){
		$("#item1").hide()
	})
	$("#link2").click(function(){
		$("#item3").hide()
	})


	// toggling function for link3	
	$("#link3").click(function(){
		$("#item3").slideToggle()
	})
	$("#link3").click(function(){
		$("#item1").hide()
	})
	$("#link3").click(function(){
		$("#item2").hide()
	})

})