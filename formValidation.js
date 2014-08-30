$(document).ready(function() {

	$.getJSON("data.json", {
		format: "json"
	}).done(function(json) {

		$("#submitButton").click(function() {

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
		});

	}).fail(function(jqxhr, textStatus, error) {
		var err = textStatus + ", " + error;
		console.log("Request Failed: " + err);
	});
});