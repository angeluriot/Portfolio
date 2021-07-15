"use strict";

let mouse_pos_x, mouse_pos_y;
let on_border = true;
let cursor_big_size, cursor_small_size;
let clicked = false;

function init_cursor()
{
	cursor_big_size = (window.innerWidth + window.innerHeight) * 0.025;
	cursor_small_size = (window.innerWidth + window.innerHeight) * 0.005;

	window.addEventListener('resize', () =>
	{
		cursor_big_size = (window.innerWidth + window.innerHeight) * 0.025;
		cursor_small_size = (window.innerWidth + window.innerHeight) * 0.005;
	});

	window.addEventListener('mousemove', e =>
	{
		mouse_pos_x = e.clientX;
		mouse_pos_x = e.clientY;

		if (e.clientX < cursor_big_size / 4 || e.clientY < cursor_big_size / 8 || e.clientX > window.innerWidth - cursor_big_size / 4 ||
			e.clientY >  window.innerHeight - cursor_big_size / 4)
		{
			TweenMax.to(document.querySelector("#mouse_follower #small"), 0.7,
			{
				width: 0
			});

			TweenMax.to(document.querySelector("#mouse_follower #big"), 0.7,
			{
				width: 0
			});

			on_border = true;
		}

		else
		{
			TweenMax.to(document.querySelector("#mouse_follower #small"), 0.7,
			{
				width: cursor_small_size
			});

			TweenMax.to(document.querySelector("#mouse_follower #big"), 0.7,
			{
				width: clicked ? cursor_big_size / 2 : cursor_big_size
			});

			on_border = false;
		}

		TweenMax.to(document.querySelector("#mouse_follower #small"), 0.01,
		{
			left: e.clientX,
			top: e.clientY
		});

		TweenMax.to(document.querySelector("#mouse_follower #big"), 0.4,
		{
			left: e.clientX,
			top: e.clientY
		});
	});

	window.addEventListener('mousedown', e =>
	{
		clicked = true;
		TweenMax.to(document.querySelector("#mouse_follower #big"), 0.4,
		{
			width: on_border ? 0 : cursor_big_size / 2
		});
	});

	window.addEventListener('mouseup', e =>
	{
		clicked = false;
		TweenMax.to(document.querySelector("#mouse_follower #big"), 0.4,
		{
			width: on_border ? 0 : cursor_big_size
		});
	});

	function update_cursor()
	{
		requestAnimationFrame(update_cursor);

		if (!on_border)
			TweenMax.to(document.querySelector("#mouse_follower #big"), 0.7,
			{
				width: clicked ? cursor_big_size / 2 : cursor_big_size
			});

		else
			TweenMax.to(document.querySelector("#mouse_follower #big"), 0.7,
			{
				width: 0
			});
	}

	update_cursor();
}
