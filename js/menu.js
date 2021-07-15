"use strict";

let menu_scroll;
let menu_shown = false;

class Menu
{
	constructor(delay_in, delay_out, text, element)
	{
		this.delay_in = delay_in;
		this.delay_out = delay_out;
		this.text = text;
		this.element = element;
		this.cursor_delay = false;
	}

	in_animation()
	{
		let size = document.querySelector(this.element + " .text").innerHTML.length;

		if (this.cursor_delay)
		{
			document.querySelector(this.element + " .text").innerHTML = this.text;
			clearInterval(this.anim_in);
			this.cursor_delay = false;
		}

		else if (size == 0)
			document.querySelector(this.element + " .text").innerHTML = "_";

		else if (size == this.text.length + 1)
			this.cursor_delay = true;

		else
			document.querySelector(this.element + " .text").innerHTML = document.querySelector(this.element + " .text").innerHTML.substring(0, size - 1) + this.text[size - 1] + "_";
	}

	in_time()
	{
		this.anim_in = setInterval(this.in_animation.bind(this), 153);
	}

	in()
	{
		menu_shown = true;

		if (this.time_out != null)
			clearTimeout(this.time_out);

		if (this.anim_out != null)
			clearInterval(this.anim_out);

		this.time_in = setTimeout(this.in_time.bind(this), this.delay_in);
	}

	out_animation()
	{
		let size = document.querySelector(this.element + " .text").innerHTML.length;

		if (this.cursor_delay)
		{
			document.querySelector(this.element + " .text").innerHTML = "";
			clearInterval(this.anim_out);
			this.cursor_delay = false;
		}

		else if (size == this.text.length && document.querySelector(this.element + " .text").innerHTML[size - 1] != "_")
			document.querySelector(this.element + " .text").innerHTML += "_";

		else if (size == 1)
			this.cursor_delay = true;

		else
			document.querySelector(this.element + " .text").innerHTML = document.querySelector(this.element + " .text").innerHTML.substring(0, size - 2) + "_";
	}

	out_time()
	{
		this.anim_out = setInterval(this.out_animation.bind(this), 153);
	}

	out()
	{
		menu_shown = false;

		if (this.time_in != null)
			clearTimeout(this.time_in);

		if (this.anim_in != null)
			clearInterval(this.anim_in);

		this.time_out = setTimeout(this.out_time.bind(this), this.delay_out);
	}

	circle()
	{
		window.addEventListener('mousemove', e =>
		{
			TweenMax.to(document.querySelector(this.element + " .circle"), 0.4,
			{
				left: (e.clientX - document.querySelector(this.element).offsetLeft).toString() + "px",
				top: (e.clientY - document.querySelector(this.element).offsetTop).toString() + "px"
			});
		});

		document.querySelector(this.element).addEventListener('mouseenter', e =>
		{
			if (this.circle_anim != null)
				this.circle_anim.kill();

			this.circle_anim = TweenMax.to(document.querySelector(this.element + " .circle"), 0.9,
			{
				width: "240%",
				ease: Sine.easeInOut
			});
		});

		document.querySelector(this.element).addEventListener('mouseleave', e =>
		{
			if (this.circle_anim != null)
				this.circle_anim.kill();

			this.circle_anim = TweenMax.to(document.querySelector(this.element + " .circle"), 0.6,
			{
				width: "0",
				ease: Sine.easeInOut
			});
		});
	}
}

function init_menu()
{
	let menu_pro = new Menu(0, 1200, "Pro", "#menu #menu_pro");
	let menu_school = new Menu(400, 800, "School", "#menu #menu_school");
	let menu_personal = new Menu(800, 400, "Personal", "#menu #menu_personal");
	let menu_about = new Menu(1200, 0, "About me", "#menu #menu_about");

	// Menu

	menu_scroll = anime(
	{
		targets: '#menu',
		height: ['0px', (window.innerWidth * 0.065).toString() + 'px'],
		easing: 'easeOutQuad',
		autoplay: false,
		duration: 1000
	});

	window.addEventListener('resize', () =>
	{
		menu_scroll = anime(
		{
			targets: '#menu',
			height: ['0px', (window.innerWidth * 0.065).toString() + 'px'],
			easing: 'easeOutQuad',
			autoplay: false,
			duration: 1000
		});

		menu_scroll.seek(window.pageYOffset * scroll_speed);
	});

	window.addEventListener('scroll', () =>
	{
		menu_scroll.seek(window.pageYOffset * scroll_speed);
	});

	menu_scroll.seek(window.pageYOffset * scroll_speed);

	// Menu text

	if (window.scrollY * scroll_speed >= 450 && !menu_shown)
	{
		menu_pro.in();
		menu_school.in();
		menu_personal.in();
		menu_about.in();
	}

	window.addEventListener('scroll', () =>
	{
		if (window.scrollY * scroll_speed >= 450 && !menu_shown)
		{
			menu_pro.in();
			menu_school.in();
			menu_personal.in();
			menu_about.in();
		}

		if (window.scrollY * scroll_speed < 450 && menu_shown)
		{
			menu_pro.out();
			menu_school.out();
			menu_personal.out();
			menu_about.out();
		}
	});

	menu_pro.circle();
	menu_school.circle();
	menu_personal.circle();
	menu_about.circle();
}
