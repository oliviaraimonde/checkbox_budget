$(document).ready(function () {
	const total_budget = parseFloat($(".total_budget").find("span").text()); //parseFloat converts to a number

	$("body").on("change", "input[type='checkbox']", function (e) {
		let remaining = total_budget;

		//colon starts psuedo selector
		$("input[type='checkbox']:checked").each(function () {
			const $this_checkbox = $(this);
			const value = parseFloat($this_checkbox.val());

			remaining = remaining - value;
		});
		console.log(remaining);
		$(".total_budget").find("span").text(remaining)

		if (remaining < 0) {
			$(".total_budget").addClass("over"); //make it red
		} else {
			$(".total_budget").removeClass("over"); //un make it red
		}
	});
});

//const name ="bob"; if(name==="bob") three equal signs usually; if(value !=5) != means "not equal"