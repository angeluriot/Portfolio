"use strict";

function init_about()
{
	document.querySelectorAll("#about_diagram .circle").forEach(element =>
	{
		element.addEventListener("mouseenter", e =>
		{
			TweenMax.to(element, 0.3,
			{
				width: "17.8%",
				ease: Power2.easeInOut
			});
		});

		element.addEventListener("mouseleave", e =>
		{
			TweenMax.to(element, 0.3,
			{
				width: "15.2%",
				ease: Power2.easeInOut
			});
		});
	});

	document.querySelector("#head_logo").addEventListener("mouseenter", e =>
	{
		TweenMax.to(document.querySelector("#head_logo"), 0.3,
		{
			width: "15%",
			ease: Power2.easeInOut
		});
	});

	document.querySelector("#head_logo").addEventListener("mouseleave", e =>
	{
		TweenMax.to(document.querySelector("#head_logo"), 0.3,
		{
			width: "13.7%",
			ease: Power2.easeInOut
		});
	});
}
