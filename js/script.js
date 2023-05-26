'use strict';

async function in_animations()
{
	await sleep(500);
	home_in_animations();
	about_in_animations();
}

window.onload = () =>
{
	document.documentElement.scrollLeft = 0;

	header_events();
	home_events();
	projects_events();
	skills_events();
	experience_events();

	in_animations();
	videos_events();

	if (!is_safari())
		document.querySelector('#safari_warning').style.display = 'none';
	else
	{
		document.querySelector('#about_section .photo').classList.add('safari_fix');
		document.querySelector('#skills_section .box').classList.add('safari_fix');
	}

	document.querySelector('#loading_screen').style.display = 'none';
	window.setTimeout(() => { document.querySelector('#lcp').style.display = 'none'; }, 100);
};
