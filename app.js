var annualSalaries = 0;

$(document).ready(function(){

	$('.submit').on("click", function(e){
		e.preventDefault();
		// Grabs and record data from submit button
		
		var values = {};

		$.each($(".form").serializeArray(), function(i, field){
			// next line trips me up
			values[field.name] = field.value;
		})

		$('.form').find('input[type=text]').val('');
		annualSalaries +=Number(values.salary);

		// Append total cost to the DOM 
		// console.log(annualSalaries);
			$('.printed-info').html("<p>Your name is " + (values.firstname) + " " + (values.lastname) + "</p> <p>Total Annual Salaries = " + annualSalaries) + ". </p>";
	});
});
