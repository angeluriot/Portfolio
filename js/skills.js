'use strict';

function skills_events()
{
	function events()
	{
		let categories = document.querySelectorAll('#skills_section .box .menu .category');
		let skills_lists = document.querySelectorAll('#skills_section .box .box_content .skills_list');

		function choose(i)
		{
			for (let j = 0; j < categories.length; j++)
			{
				categories[j].style.backgroundColor = 'rgba(0, 0, 0, 0)';
				categories[j].style.cursor = 'pointer';
			}

			categories[i].style.backgroundColor = 'white';
			categories[i].style.cursor = 'default';

			for (let j = 0; j < skills_lists.length; j++)
				skills_lists[j].style.display = 'none';

			skills_lists[i].style.display = 'grid';
		}

		for (let i = 0; i < categories.length; i++)
		{
			categories[i].addEventListener('click', (e) =>
			{
				choose(i);
			});
		}

		choose(0);
	}

	function generate_skills(my_data)
	{
		let box = document.querySelector('#skills_section .box');
		box.innerHTML = '';

		if (window.innerWidth > 930)
		{
			let menu = '';
			let box_content = '';

			for (let category of my_data.skills_categories)
			{
				menu += `<div class="category">${category.name}</div>`;

				let skills = '';

				for (let skill of category.skills)
				{
					skills += `<a class="skill" href="${skill.link}" target="_blank">
						<img src="${skill.logo}">
						<span>${skill.name}</span>
					</a>`;
				}

				box_content += `<div class="skills_list">${skills}</div>`;
			}

			box.innerHTML = `<div class="menu">${menu}</div><div class="box_content">${box_content}</div>`;

			events();
		}

		else
		{
			for (let category of my_data.skills_categories)
			{
				box.innerHTML += `<div class="category_title">${category.name}</div>`;

				let skills = '';

				for (let skill of category.skills)
				{
					skills += `<a class="skill" href="${skill.link}" target="_blank">
						<img src="${skill.logo}">
						<span>${skill.name}</span>
					</a>`;
				}

				box.innerHTML += `<div class="box_content"><div class="skills_list">${skills}</div></div>`;
			}
		}
	}

	let prev_width = window.innerWidth;
	read_json('resources/jsons/skills.json', generate_skills);

	window.addEventListener('resize', () =>
	{
		if ((prev_width >= 930 && window.innerWidth <= 930) || (prev_width <= 930 && window.innerWidth >= 930))
		{
			read_json('resources/jsons/skills.json', generate_skills);
			prev_width = window.innerWidth;
		}
	});
}
