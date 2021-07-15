"use strict";

let scroll_speed;

function anime_title()
{
	scroll_speed = 2800 / window.innerWidth;

	window.addEventListener("resize", () =>
	{
		scroll_speed = 2800 / window.innerWidth;
	});

	// Angel

	let a_anime = anime.timeline();

	a_anime.add({
		targets: ['#angel #a path'],
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300,
		delay: function(el, i) { return i * 700; }
	}, 0)
	.add({
		targets: '#angel #a path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800,
		delay: function(el, i) { return i * 700; }
	}, 0);

	let n_anime = anime.timeline();

	n_anime.add({
		targets: '#angel #n path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300,
		delay: function(el, i) { return i * 800; }
	}, 100)
	.add({
		targets: ['#angel #n path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800,
		delay: function(el, i) { return i * 800; }
	}, 100);

	let g_anime = anime.timeline();

	g_anime.add({
		targets: '#angel #g path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 200)
	.add({
		targets: ['#angel #g path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 200);

	let e_anime = anime.timeline();

	e_anime.add({
		targets: '#angel #e path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 300)
	.add({
		targets: ['#angel #e path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 300);

	let l_anime = anime.timeline();

	l_anime.add({
		targets: '#angel #l path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 400)
	.add({
		targets: ['#angel #l path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 400);

	// Uriot

	let u_anime = anime.timeline();

	u_anime.add({
		targets: '#uriot #u path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 500)
	.add({
		targets: ['#uriot #u path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 500);

	let r_anime = anime.timeline();

	r_anime.add({
		targets: '#uriot #r path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300,
		delay: function(el, i) { return i * 750; }
	}, 600)
	.add({
		targets: ['#uriot #r path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800,
		delay: function(el, i) { return i * 750; }
	}, 600);

	let i_anime = anime.timeline();

	i_anime.add({
		targets: '#uriot #i path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300,
		delay: function(el, i) { return i * 700; }
	}, 700)
	.add({
		targets: ['#uriot #i path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800,
		delay: function(el, i) { return i * 700; }
	}, 700);

	let o_anime = anime.timeline();

	o_anime.add({
		targets: '#uriot #o circle',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 800)
	.add({
		targets: ['#uriot #o circle'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 800);

	let t_anime = anime.timeline();

	t_anime.add({
		targets: '#uriot #t path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300,
		delay: function(el, i) { return i * 950; }
	}, 900)
	.add({
		targets: ['#uriot #t path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800,
		delay: function(el, i) { return i * 950; }
	}, 900);

	// Projects

	let project_p_anime = anime.timeline();

	project_p_anime.add({
		targets: '#projects #p path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 1000)
	.add({
		targets: ['#projects #p path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 1000);

	let project_r_anime = anime.timeline();

	project_r_anime.add({
		targets: '#projects #r path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300,
		delay: function(el, i) { return i * 750; }
	}, 1100)
	.add({
		targets: ['#projects #r path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800,
		delay: function(el, i) { return i * 750; }
	}, 1100);

	let project_o_anime = anime.timeline();

	project_o_anime.add({
		targets: '#projects #o circle',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 1200)
	.add({
		targets: ['#projects #o circle'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 1200);

	let project_j_anime = anime.timeline();

	project_j_anime.add({
		targets: '#projects #j path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300,
		delay: function(el, i) { return i * 300; }
	}, 1300)
	.add({
		targets: ['#projects #j path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800,
		delay: function(el, i) { return i * 300; }
	}, 1300);

	let project_e_anime = anime.timeline();

	project_e_anime.add({
		targets: '#projects #e path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 1400)
	.add({
		targets: ['#projects #e path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 1400);

	let project_c_anime = anime.timeline();

	project_c_anime.add({
		targets: '#projects #c path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 1500)
	.add({
		targets: ['#projects #c path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 1500);

	let project_t_anime = anime.timeline();

	project_t_anime.add({
		targets: '#projects #t path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300,
		delay: function(el, i) { return i * 950; }
	}, 1600)
	.add({
		targets: ['#projects #t path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800,
		delay: function(el, i) { return i * 950; }
	}, 1600);

	let project_s_anime = anime.timeline();

	project_s_anime.add({
		targets: '#projects #s path',
		strokeWidth: ["0px", "30px"],
		easing: 'easeInOutSine',
		duration: 300
	}, 1700)
	.add({
		targets: ['#projects #s path'],
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutExpo',
		duration: 1800
	}, 1700);

	move_title();
}

let title_scroll, title_move, project_move, a_move, n_move, g_move, e_move, l_move, u_move, r_move, i_move, o_move, t_move;
let project_p_move, project_r_move, project_o_move, project_j_move, project_e_move, project_c_move, project_t_move, project_s_move;
let scroll_size_ratio = 0.1875;

function move_title()
{
	title_scroll = anime({
		targets: '#my_title',
		top: [(window.innerWidth * 0.0925).toString() + 'px', (window.innerWidth * 0.01).toString() + 'px'],
		easing: 'easeOutQuad',
		autoplay: false,
		duration: 1000
	});

	title_move = anime({
		targets: '#my_title',
		left: ['50%', '15%'],
		width: ['80%', (80 * scroll_size_ratio).toString() + '%'],
		height: ['20%', (20 * scroll_size_ratio).toString() + '%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	project_move = anime({
		targets: '#projects',
		left: ['50%', '103%'],
		top: [(window.innerWidth * 0.16).toString() + 'px', '0px'],
		width: ['50%', '85%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	window.addEventListener('resize', () => {
		title_scroll = anime({
			targets: '#my_title',
			top: [(window.innerWidth * 0.0925).toString() + 'px', (window.innerWidth * 0.01).toString() + 'px'],
			easing: 'easeOutQuad',
			autoplay: false,
			duration: 1400
		});

		project_move = anime({
			targets: '#projects',
			left: ['50%', '103%'],
			top: [(window.innerWidth * 0.16).toString() + 'px', '0px'],
			width: ['50%', '85%'],
			easing: 'easeInOutQuad',
			autoplay: false,
			duration: 1000
		});

		move_title_on_scroll();
	})

	// Angel

	a_move = anime({
		targets: '#angel #letter_a',
		top: ['9%', '20%'],
		left: ['0%', '0%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	n_move = anime({
		targets: '#angel #letter_n',
		top: ['8%', '15%'],
		left: ['11.5%', '11.5%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	g_move = anime({
		targets: '#angel #letter_g',
		top: ['7%', '10%'],
		left: ['22.6%', '22.6%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	e_move = anime({
		targets: '#angel #letter_e',
		top: ['6%', '5%'],
		left: ['34%', '34%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	l_move = anime({
		targets: '#angel #letter_l',
		top: ['5%', '0%'],
		left: ['41.5%', '41.5%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	// Uriot

	u_move = anime({
		targets: '#uriot #letter_u',
		top: ['4%', '20%'],
		left: ['0%', '0%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	r_move = anime({
		targets: '#uriot #letter_r',
		top: ['3%', '15%'],
		left: ['10.5%', '10.5%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	i_move = anime({
		targets: '#uriot #letter_i',
		top: ['2%', '10%'],
		left: ['17%', '17%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	o_move = anime({
		targets: '#uriot #letter_o',
		top: ['1%', '5%'],
		left: ['24.8%', '24.8%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	t_move = anime({
		targets: '#uriot #letter_t',
		top: ['0%', '0%'],
		left: ['34.4%', '34.4%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	// Projects

	project_p_move = anime({
		targets: '#projects #letter_p',
		top: ['3.5%', '18%'],
		left: ['0%', '0%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	project_r_move = anime({
		targets: '#projects #letter_r',
		top: ['3%', '15%'],
		left: ['10.5%', '10.5%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	project_o_move = anime({
		targets: '#projects #letter_o',
		top: ['2.5%', '12%'],
		left: ['20.5%', '20.5%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	project_j_move = anime({
		targets: '#projects #letter_j',
		top: ['2%', '9%'],
		left: ['27%', '27%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	project_e_move = anime({
		targets: '#projects #letter_e',
		top: ['1.5%', '6%'],
		left: ['37%', '37%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	project_c_move = anime({
		targets: '#projects #letter_c',
		top: ['1%', '3%'],
		left: ['47.7%', '47.7%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	project_t_move = anime({
		targets: '#projects #letter_t',
		top: ['0.5%', '0%'],
		left: ['56.8%', '56.8%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	project_s_move = anime({
		targets: '#projects #letter_s',
		top: ['0%', '-3%'],
		left: ['65.5%', '65.5%'],
		easing: 'easeInOutQuad',
		autoplay: false,
		duration: 1000
	});

	move_title_on_scroll();

	window.addEventListener('scroll', () => {
		move_title_on_scroll();
	});
}

function move_title_on_scroll()
{
	title_scroll.seek(window.pageYOffset * 1.5 * scroll_speed);
	title_move.seek(window.pageYOffset * scroll_speed);
	project_move.seek(window.pageYOffset * scroll_speed);
	a_move.seek(window.pageYOffset * scroll_speed);
	n_move.seek(window.pageYOffset * scroll_speed);
	g_move.seek(window.pageYOffset * scroll_speed);
	e_move.seek(window.pageYOffset * scroll_speed);
	l_move.seek(window.pageYOffset * scroll_speed);
	u_move.seek(window.pageYOffset * scroll_speed);
	r_move.seek(window.pageYOffset * scroll_speed);
	i_move.seek(window.pageYOffset * scroll_speed);
	o_move.seek(window.pageYOffset * scroll_speed);
	t_move.seek(window.pageYOffset * scroll_speed);
	project_p_move.seek(window.pageYOffset * scroll_speed);
	project_r_move.seek(window.pageYOffset * scroll_speed);
	project_o_move.seek(window.pageYOffset * scroll_speed);
	project_j_move.seek(window.pageYOffset * scroll_speed);
	project_e_move.seek(window.pageYOffset * scroll_speed);
	project_c_move.seek(window.pageYOffset * scroll_speed);
	project_t_move.seek(window.pageYOffset * scroll_speed);
	project_s_move.seek(window.pageYOffset * scroll_speed);
}
