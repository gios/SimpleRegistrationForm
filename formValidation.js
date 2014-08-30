$(document).ready(function() {

	$("#submitButton").click(function() {

		$.ajax({
			url: "data.json",
			dataType: "text",
			success: function(data) {
				var json = $.parseJSON(data);

				if ($("#inputEmail").val() === json.student.email && parseInt($("#inputPassword").val()) === json.student.password) {
					$("#alertBox div").html("<div class='alert alert-success' role='alert'>Correct," + " Student " + json.student.email + "!</div>");
				} else if($("#inputEmail").val() === json.teacher.email && parseInt($("#inputPassword").val()) === json.teacher.password) {
					$("#alertBox div").html("<div class='alert alert-success' role='alert'>Correct," + " Teacher " + json.teacher.email + "!</div>");
				} else {
					$("#alertBox div").html("<div class='alert alert-danger' role='alert'>Login and password are Incorrect!</div>");
				}
			}
		});
	});
});