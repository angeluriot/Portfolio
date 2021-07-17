"use strict";

let project_width;
let project_height;

let small_video_width;
let big_video_width;

let projects;
let video_divs;
let videos_html;
let text_boxes;
let project_tags = [];
let project_tag_texts = [];
let project_buttons;
let projects_shown = [];
let projects_anim = [];
let project_titles;
let project_titles_text;
let videos_left = [];
let load_animations;
let load_animations_div_1;
let load_animations_div_2;
let load_animations_div_3;
let load_animations_div_4;

function size_tags(i)
{
	for (let j = 0; j < project_tags[i].length; j++)
	{
		let tag_text_size = (project_tag_texts[i][j].getBoundingClientRect().right - project_tag_texts[i][j].getBoundingClientRect().left) / project_width;
		project_tags[i][j].setAttribute("viewBox", "0 0 " + (tag_text_size * 620 + 20).toString() + " 23");
	}

	let tag_shift = 22;

	for (let j = 0; j < project_tags[i].length; j++)
	{
		if (j > 0)
			tag_shift += ((project_tags[i][j - 1].getBoundingClientRect().right - project_tags[i][j - 1].getBoundingClientRect().left) / project_width) * 117 + 1;

		if (projects[i].classList.contains("on_left"))
			project_tags[i][j].style.left = tag_shift.toString() + "%";

		else
			project_tags[i][j].style.left = (100 - tag_shift).toString() + "%";
	}
}

function size_video(i)
{
	small_video_width = 32;
	big_video_width = small_video_width * (15.9 / 9);

	video_divs[i].style.borderRadius = (project_height * 0.1).toString() + "px";
}

function animate_video(i)
{
	video_divs[i].addEventListener('mouseenter', e =>
	{
		TweenMax.to(video_divs[i], 1,
		{
			width: big_video_width.toString() + "%",
			ease: Power2.easeInOut
		});

		TweenMax.to(videos_html[i], 0.85,
		{
			left: "50%",
			ease: Power2.easeInOut
		});

		if (projects[i].classList.contains("on_left"))
			TweenMax.to(text_boxes[i], 1,
			{
				left: (big_video_width - small_video_width + 15).toString() + "%",
				ease: Power2.easeInOut
			});

		else
			TweenMax.to(text_boxes[i], 1,
			{
				left: (100 - (big_video_width - small_video_width + 15)).toString() + "%",
				ease: Power2.easeInOut
			});
	});

	video_divs[i].addEventListener('mouseleave', e =>
	{
		TweenMax.to(video_divs[i], 1,
		{
			width: small_video_width.toString() + "%",
			ease: Power2.easeInOut
		});

		TweenMax.to(videos_html[i], 1.15,
		{
			left: videos_left[i].toString() + "%",
			ease: Power2.easeInOut
		});

		if (projects[i].classList.contains("on_left"))
			TweenMax.to(text_boxes[i], 1,
			{
				left: "15%",
				ease: Power2.easeInOut
			});

		else
			TweenMax.to(text_boxes[i], 1,
			{
				left: "85%",
				ease: Power2.easeInOut
			});
	});
}

function animate_button(i)
{
	project_buttons[i].addEventListener('mouseenter', e =>
	{
		TweenMax.to(project_buttons[i], 0.4,
		{
			width: "10.5%",
			ease: Power2.easeInOut
		});
	});

	project_buttons[i].addEventListener('mouseleave', e =>
	{
		TweenMax.to(project_buttons[i], 0.4,
		{
			width: "9%",
			ease: Power2.easeInOut
		});
	});

	project_buttons[i].addEventListener('mousedown', e =>
	{
		TweenMax.to(project_buttons[i], 0.1,
		{
			width: "9.5%",
			ease: Power2.easeInOut
		});
	});

	project_buttons[i].addEventListener('mouseup', e =>
	{
		TweenMax.to(project_buttons[i], 0.1,
		{
			width: "10.5%",
			ease: Power2.easeInOut
		});
	});
}

function animate_tags(i)
{
	project_tags[i].forEach(element =>
	{
		element.addEventListener('mouseenter', e =>
		{
			TweenMax.to(element, 0.4,
			{
				opacity: "0.5",
				ease: Power2.easeInOut
			});
		});

		element.addEventListener('mouseleave', e =>
		{
			TweenMax.to(element, 0.4,
			{
				opacity: "1",
				ease: Power2.easeInOut
			});
		});
	});
}

function size_title(i)
{
	let screen_size = project_titles_text[i].getBoundingClientRect().right - project_titles_text[i].getBoundingClientRect().left;
	let size = (screen_size / project_width) * 400;
	let shift = 0.022 * Math.pow(size, 1.07);

	project_titles[i].setAttribute("viewBox", "0 0 " + (size - shift).toString() + " 21");
}

function size_load(i)
{
	load_animations[i].style.width = (((small_video_width * project_width) / 100) * 0.35).toString() + "px";
	load_animations[i].style.height = (((small_video_width * project_width) / 100) * 0.35).toString() + "px";
}

function size_project(i)
{
	project_width = window.innerWidth * 0.664 * 0.97;
	project_height = project_width * 0.32;

	projects[i].style.width = project_width.toString() + "px";
	projects[i].style.height = project_height.toString() + "px";

	text_boxes[i].style.borderRadius = (project_height * 0.1).toString() + "px";

	size_video(i);
	size_tags(i);
	size_title(i);
	size_load(i);

	window.addEventListener('resize', () =>
	{
		project_width = window.innerWidth * 0.664 * 0.97;
		project_height = project_width * 0.32;

		projects[i].style.width = project_width.toString() + "px";
		projects[i].style.height = project_height.toString() + "px";

		text_boxes[i].style.borderRadius = (project_height * 0.1).toString() + "px";

		size_video(i);
		size_load(i);
	});
}

function animate_project(i)
{
	projects[i].addEventListener('mouseenter', e =>
	{
		TweenMax.to(projects[i], 0.7,
		{
			width: project_width * 1.1,
			height: project_height * 1.1,
			ease: Power2.easeInOut
		});
	});

	projects[i].addEventListener('mouseleave', e =>
	{
		TweenMax.to(projects[i], 0.7,
		{
			width: project_width,
			height: project_height,
			ease: Power2.easeInOut
		});
	});

	function show(i)
	{
		if (projects[i].getBoundingClientRect().top <= window.innerHeight && projects[i].getBoundingClientRect().bottom >= 0 && !projects_shown[i])
		{
			projects_shown[i] = true;

			projects_anim[i] = TweenMax.to(projects[i], 0.7,
			{
				opacity: 1,
				ease: Power2.easeInOut
			});

			if	(document.querySelector("#" + projects[i].id + " .html_true_video") != null)
				document.querySelector("#" + projects[i].id + " .html_true_video").play();
		}

		else if ((projects[i].getBoundingClientRect().top > window.innerHeight || projects[i].getBoundingClientRect().bottom < 0) && projects_shown[i])
		{
			projects_anim[i].kill();
			projects_shown[i] = false;
			projects[i].style.opacity = 0;

			if	(document.querySelector("#" + projects[i].id + " .html_true_video") != null)
				document.querySelector("#" + projects[i].id + " .html_true_video").pause();
		}
	}

	projects[i].style.opacity = 0;
	show(i);

	window.addEventListener('scroll', () => { show(i); });
	window.addEventListener('resize', () => { show(i); });

	animate_video(i);
	animate_button(i);
	animate_tags(i);
}

function place_all()
{
	let place = -8;
	let pro_projects = document.querySelectorAll("#pro_content .project");
	let school_projects = document.querySelectorAll("#school_content .project");
	let personal_projects = document.querySelectorAll("#personal_content .project");
	let about_projects = document.querySelectorAll("#about_content .project");

	document.querySelector("#pro").style.top = (place - 5).toString() + "%";
	document.querySelector("#sub_title_pro").style.top = place.toString() + "%";
	place += 19;

	pro_projects.forEach(element =>
	{
		element.style.top = place.toString() + "%";
		place += 23.5;
	});

	place -= 12;
	document.querySelector("#end_title_pro").style.top = place.toString() + "%";
	place += 8;
	document.querySelector("#school").style.top = (place - 5).toString() + "%";
	document.querySelector("#sub_title_school").style.top = place.toString() + "%";
	place += 19;

	school_projects.forEach(element =>
	{
		element.style.top = place.toString() + "%";
		place += 23.5;
	});

	place -= 12;
	document.querySelector("#end_title_school").style.top = place.toString() + "%";
	place += 8;
	document.querySelector("#personal").style.top = (place - 5).toString() + "%";
	document.querySelector("#sub_title_personal").style.top = place.toString() + "%";
	place += 19;

	personal_projects.forEach(element =>
	{
		element.style.top = place.toString() + "%";
		place += 23.5;
	});

	place -= 12;
	document.querySelector("#end_title_personal").style.top = place.toString() + "%";
	place += 8;
	document.querySelector("#about").style.top = (place - 5).toString() + "%";
	document.querySelector("#sub_title_about").style.top = place.toString() + "%";
	place += 7;

	document.querySelector("#about_diagram").style.top = place.toString() + "%";

	place += 47;
	document.querySelector("#end_title_about").style.top = place.toString() + "%";

	document.querySelector("#scroll_div").style.top = place.toString() + "%";
	document.querySelector("#scroll_div").style.height = "9%";
}

function init_project()
{
	let project_svgs = document.querySelectorAll(".on_right .text_box .text");

	project_svgs.forEach(element =>
	{
		element.setAttribute("viewBox", "-405 0 405 120");
	});

	projects = document.querySelectorAll(".project");
	video_divs = document.querySelectorAll(".project .video_div");
	videos_html = document.querySelectorAll(".project .html_video");
	text_boxes = document.querySelectorAll(".text_box");
	project_buttons = document.querySelectorAll(".project .link_button");
	project_titles = document.querySelectorAll(".project .project_title");
	project_titles_text = document.querySelectorAll(".project .project_title_text");
	load_animations = document.querySelectorAll(".project .video_div .lds-ring");
	load_animations_div_1 = document.querySelectorAll(".project .video_div .lds-ring-1");
	load_animations_div_2 = document.querySelectorAll(".project .video_div .lds-ring-2");
	load_animations_div_3 = document.querySelectorAll(".project .video_div .lds-ring-3");
	load_animations_div_4 = document.querySelectorAll(".project .video_div .lds-ring-4");

	for (let i = 0; i < projects.length; i++)
	{
		projects_anim.push(TweenMax.to(projects[i], 0,
		{
			ease: Power2.easeInOut
		}));

		projects_shown.push(false);

		if (projects[i].id == "flappy_bird_ai")
			videos_left.push(88);

		else if (projects[i].id == "shell")
			videos_left.push(85);

		else if (projects[i].id == "cars_ai")
			videos_left.push(88);

		else
			videos_left.push(50);

		videos_html[i].style.left = videos_left[i].toString() + "%";
	}

	for (let i = 0; i < projects.length; i++)
	{
		project_tags.push(document.querySelectorAll("#" + projects[i].id + " .text_box .tag"));
		project_tag_texts.push(document.querySelectorAll("#" + projects[i].id + " .text_box .tag_text"));

		size_project(i);
		animate_project(i);
	}
}
