$(document).ready(function() {

	$("#submitButton").click(function() {

		$.ajax({
			url: "data.json",
			dataType: "text",
			success: function(data) {
				var json = $.parseJSON(data);
				console.log(json.student.email);
				console.log(json.student.password);

				if ($("#inputEmail").val() === json.student.email && parseInt($("#inputPassword").val()) === json.student.password) {
					$("#alertBox div").html("<div class='alert alert-success' role='alert'>Login and password are Correct!</div>");
				} else {
					$("#alertBox div").html("<div class='alert alert-danger' role='alert'>Login and password are Incorrect!</div>");
				}
			}
		});
	});
});