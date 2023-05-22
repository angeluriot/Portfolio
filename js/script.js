'use strict';

async function in_animations()
{
	await sleep(500);
	home_in_animations();
	about_in_animations();
}

function fix_safari()
{
	let all = document.querySelectorAll('*');

	for (let element of all)
	{
		element.style.filter = 'none';
		element.style.webkitFilter = 'none';
	}

	let all_transitions = [
		document.querySelectorAll('#experience_section .job_view a'),
		document.querySelectorAll('#experience_section .job_text .text'),
		document.querySelectorAll('#experience_section .job'),
		document.querySelectorAll('#projects_section .project_view a'),
		document.querySelectorAll('#projects_section .project_text .text'),
		document.querySelectorAll('#projects_section .project')
	];

	for (let list of all_transitions)
		for (let element of list)
		{
			console.log('done')
			element.style.transition = 'none';
			element.style.webkitTransition = 'none';
		}
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
		fix_safari();
		window.setTimeout(fix_safari, 1000);
		window.setTimeout(fix_safari, 2000);
		window.setTimeout(fix_safari, 5000);
	}

	document.querySelector('#loading_screen').style.display = 'none';
	window.setTimeout(() => { document.querySelector('#lcp').style.display = 'none'; }, 100);
};
