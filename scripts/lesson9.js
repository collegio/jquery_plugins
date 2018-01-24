/*

	Learn to Code JavaScript: Lesson 9
	jQuery Part 3

	Let's finish off the lesson by displaying how easy it is to use jQueryUI to display
	elegant functionality in sortable lists and datepickers

*/

$(document).ready(function() {

	// Let's use jQueryUI to set our list to sortable!
	$("#sortable_list").sortable();

	// Finally, let's set our two input fields to be date selection elements
	$("#input_date_1").datepicker();
	$("#input_date_2").datepicker();

	// We'll print out the dates two when the button is clicked
	$("#button_print_dates").click(function() {
		alert("The specified dates are "+$("#input_date_1").val()+" and "+$("#input_date_2").val()+".");
	});
});