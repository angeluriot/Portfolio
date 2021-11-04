"use strict";

import { title_baground_init } from './titleBackground.js';

window.onload = function()
{
	document.querySelector("#content").style.top = (window.innerWidth * 0.55).toString() + "px";
	document.querySelector("#content").style.height = window.innerWidth.toString() + "px";

	window.addEventListener('resize', () =>
	{
		document.querySelector("#content").style.top = (window.innerWidth * 0.55).toString() + "px";
		document.querySelector("#content").style.height = window.innerWidth.toString() + "px";
	});

	place_all();
	init_sub_titles();
	anime_title();
	title_baground_init();
	init_cursor();
	init_menu();
	init_project();
	init_about();

	document.getElementById("loading_screen").style.opacity = '0';
	document.querySelectorAll(".project .html_true_video").forEach(element => { element.load(); });
}
