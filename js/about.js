'use strict';

function about_in_animations()
{
	let done = false;
	let elements = document.querySelectorAll('#about_section .in_animation');
	let section = document.querySelector('#about_section .photo');

	async function in_animation_check()
	{
		if (!done && is_in_viewport(section))
		{
			for (let i of elements)
			{
				i.style.clipPath = 'circle(49.7%)';
				await sleep(300);
			}

			done = true;
		}
	}

	window.addEventListener('scroll', (e) =>
	{
		in_animation_check();
	});

	window.addEventListener('resize', (e) =>
	{
		in_animation_check();
	});

	in_animation_check();
}
