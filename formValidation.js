$(document).ready(function() {

	$("#submitButton").click(function() {

		$.ajax({
			url: "data.json",
			dataType: "text",
			success: function(data) {
				var json = $.parseJSON(data);

				for (var i = 0; i <= Object.keys(json.students).length - 1; i++) {
					if (($("#inputEmail").val() === json.students[i].email) && (parseInt($("#inputPassword").val()) === json.students[i].password)) {
						$("#alertBox div").html("<div class='alert alert-success' role='alert'>Correct," + " Student " + json.students[i].email + "!</div>");
						break;
					} else {
						for (var j = 0; j <= Object.keys(json.teachers).length - 1; j++) {
							if (($("#inputEmail").val() === json.teachers[j].email) && (parseInt($("#inputPassword").val()) === json.teachers[j].password)) {
								$("#alertBox div").html("<div class='alert alert-success' role='alert'>Correct," + " Teacher " + json.teachers[j].email + "!</div>");
								break;
							} else {
								$("#alertBox div").html("<div class='alert alert-danger' role='alert'>Login and password are Incorrect!</div>");
							}
						}
					}
				}
			}
		});
	});
});