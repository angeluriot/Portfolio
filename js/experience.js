'use strict';

function experience_events()
{
	let done;
	let elements;

	async function in_animation_check()
	{
		for (let i = 0; i < elements.length; i++)
			if (!done[i] && is_in_viewport(elements[i]))
			{
				elements[i].style.opacity = '1';
				elements[i].style.transform = 'translateY(0)';
				done[i] = true;
				await sleep(300);
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

	function add_job(job, inverted)
	{
		let tags = '';

		for (let tag of job.tags)
			tags += `<a href="${tag.url}" target="_blank">${tag.name}</a>`;

		if (window.innerWidth > 780)
		{
			document.querySelector('#experience_section .experience_content').innerHTML += `
				<div class="in_animation job ${inverted ? 'inverted' : ''}">
					<div class="job_text">
						<div class="type">
							<span>${job.date}</span>
							<span>•</span>
							<span>${job.type}</span>
						</div>
						<a class="job_title" href="${job.link}" target="_blank">${job.title}</a>
						<div class="text"><p>${job.description}</p></div>
						<div class="tags">` + tags + `</div>
					</div>
					<div class="job_view">
						<a href="${job.link}" target="_blank">
							<img src="${job.image}"/>
							` + (job.video == 'none' ? '' : `
							<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
							<video loop muted preload="metadata">
								<source src="${job.video}" type="video/mp4"/>
							</video>
							`) + `
						</a>
					</div>
				</div>`;
		}

		else
		{
			document.querySelector('#experience_section .experience_content').innerHTML += `
				<div class="in_animation job" style="background-image: url(${job.image});">
					<div class="job_text"">
						<div class="type">
							<span>${job.type}</span>
							<span>•</span>
							<span>${job.date}</span>
						</div>
						<a class="job_title" href="${job.link}" target="_blank">${job.title}</a>
						<div class="text"><p>${job.description}</p></div>
						<div class="tags">` + tags + `</div>
					</div>
				</div>`;
		}
	}

	function generate(data)
	{
		document.querySelector('#experience_section .experience_content').innerHTML = '';
		let inverted = data.experience.length % 2 == 0;

		for (let job of data.experience)
		{
			inverted = !inverted;
			add_job(job, inverted);
		}

		done = [];
		elements = document.querySelectorAll('#experience_section .in_animation');

		for (let _ of elements)
			done.push(false);

		in_animation_check();
		videos_start_event();
		videos_scroll_event();
	}

	function generate_experience()
	{
		read_json("resources/jsons/experience.json", generate);
	}

	let prev_width = window.innerWidth;
	generate_experience();

	window.addEventListener('resize', () =>
	{
		if ((prev_width >= 780 && window.innerWidth <= 780) || (prev_width <= 780 && window.innerWidth >= 780))
		{
			generate_experience();
			prev_width = window.innerWidth;
		}
	});

	document.querySelectorAll('#experience_section .sort_choices .choice').forEach((el) =>
	{
		el.addEventListener('click', () =>
		{
			generate_experience();

			document.querySelectorAll('#experience_section .sort_choices .choice').forEach((el) =>
			{
				el.classList.remove('selected');
			});

			el.classList.add('selected');
		});
	});
}
