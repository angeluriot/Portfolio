'use strict';

async function in_animations()
{
	await sleep(500);
	home_in_animations();
	about_in_animations();
}

window.onload = () =>
{
	if (!is_safari())
		document.querySelector('#safari_warning').style.display = 'none';

	document.documentElement.scrollLeft = 0;

	header_events();
	home_events();
	projects_events();
	skills_events();
	experience_events();

	in_animations();
	videos_events();

	document.querySelector('#loading_screen').style.display = 'none';
};
