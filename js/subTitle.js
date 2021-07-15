"use strict";

function is_visible(element)
{
	const rect = document.querySelector(element).getBoundingClientRect();
	return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function is_center_visible(element)
{
	const rect = document.querySelector(element).getBoundingClientRect();
	return (rect.top + rect.bottom) / 2 <= window.innerHeight && (rect.top + rect.bottom) / 2 >= 0;
}

class SubTitle
{
	constructor(element, texts)
	{
		this.element = element;
		this.texts = texts;
		this.anim_id = 0;
		this.shown = false;
	}

	in_animation()
	{
		if (this.anim_id == this.texts.length)
			clearInterval(this.anim_in)

		else
		{
			document.querySelector(this.element + " .text").innerHTML = this.texts[this.anim_id];
			this.anim_id++;
		}
	}

	in()
	{
		this.shown = true;
		this.anim_in = setInterval(this.in_animation.bind(this), 153);
	}

	animate()
	{
		if (is_center_visible(this.element) && !this.shown)
			this.in();

		if (!is_visible(this.element) && this.shown)
		{
			clearInterval(this.anim_in);
			this.anim_id = 0;
			this.shown = false;
			document.querySelector(this.element + " .text").innerHTML = "";
		}
	}

	init()
	{
		this.animate();
		window.addEventListener("scroll", this.animate.bind(this));
	}
}

function init_sub_titles()
{
	let pro_sub_title = new SubTitle("#sub_title_pro", ["_", "&lt;&gt;_", "&lt;_&gt;", "&lt; _&gt;", "&lt; P_&gt;", "&lt; PR_&gt;",
		"&lt; PRO_&gt;", "&lt; PRO _&gt;", "&lt; PRO &gt;_", "&lt; PRO &gt;_", "&lt; PRO &gt;"]);
	pro_sub_title.init();
	let pro_end_title = new SubTitle("#end_title_pro", ["_", "&lt;&gt;_", "&lt;_&gt;", "&lt;/_&gt;", "&lt;/ _&gt;", "&lt;/ P_&gt;", "&lt;/ PR_&gt;",
		"&lt;/ PRO_&gt;", "&lt;/ PRO _&gt;", "&lt;/ PRO &gt;_", "&lt;/ PRO &gt;_", "&lt;/ PRO &gt;"]);
	pro_end_title.init();

	let school_sub_title = new SubTitle("#sub_title_school", ["_", "&lt;&gt;_", "&lt;_&gt;", "&lt; _&gt;", "&lt; S_&gt;", "&lt; SC_&gt;", "&lt; SCH_&gt;",
	"&lt; SCHO_&gt;", "&lt; SCHOO_&gt;", "&lt; SCHOOL_&gt;", "&lt; SCHOOL _&gt;", "&lt; SCHOOL &gt;_", "&lt; SCHOOL &gt;_", "&lt; SCHOOL &gt;"]);
	school_sub_title.init();
	let school_end_title = new SubTitle("#end_title_school", ["_", "&lt;&gt;_", "&lt;_&gt;", "&lt;/_&gt;", "&lt;/ _&gt;", "&lt;/ S_&gt;", "&lt;/ SC_&gt;", "&lt;/ SCH_&gt;",
	"&lt;/ SCHO_&gt;", "&lt;/ SCHOO_&gt;", "&lt;/ SCHOOL_&gt;", "&lt;/ SCHOOL _&gt;", "&lt;/ SCHOOL &gt;_", "&lt;/ SCHOOL &gt;_", "&lt;/ SCHOOL &gt;"]);
	school_end_title.init();

	let personal_sub_title = new SubTitle("#sub_title_personal", ["_", "&lt;&gt;_", "&lt;_&gt;", "&lt; _&gt;", "&lt; P_&gt;", "&lt; PE_&gt;", "&lt; PER_&gt;",
	"&lt; PERS_&gt;", "&lt; PERSO_&gt;", "&lt; PERSON_&gt;", "&lt; PERSONA_&gt;", "&lt; PERSONAL_&gt;", "&lt; PERSONAL _&gt;", "&lt; PERSONAL &gt;_", "&lt; PERSONAL &gt;_", "&lt; PERSONAL &gt;"]);
	personal_sub_title.init();
	let personal_end_title = new SubTitle("#end_title_personal", ["_", "&lt;&gt;_", "&lt;_&gt;", "&lt;/_&gt;", "&lt;/ _&gt;", "&lt;/ P_&gt;", "&lt;/ PE_&gt;", "&lt;/ PER_&gt;",
	"&lt;/ PERS_&gt;", "&lt;/ PERSO_&gt;", "&lt;/ PERSON_&gt;", "&lt;/ PERSONA_&gt;", "&lt;/ PERSONAL_&gt;", "&lt;/ PERSONAL _&gt;", "&lt;/ PERSONAL &gt;_", "&lt;/ PERSONAL &gt;_", "&lt;/ PERSONAL &gt;"]);
	personal_end_title.init();

	let about_sub_title = new SubTitle("#sub_title_about", ["_", "&lt;&gt;_", "&lt;_&gt;", "&lt; _&gt;", "&lt; A_&gt;", "&lt; AB_&gt;", "&lt; ABO_&gt;",
	"&lt; ABOU_&gt;", "&lt; ABOUT_&gt;", "&lt; ABOUT _&gt;", "&lt; ABOUT M_&gt;", "&lt; ABOUT ME_&gt;", "&lt; ABOUT ME _&gt;", "&lt; ABOUT ME &gt;_", "&lt; ABOUT ME &gt;_", "&lt; ABOUT ME &gt;"]);
	about_sub_title.init();
	let about_end_title = new SubTitle("#end_title_about", ["_", "&lt;&gt;_", "&lt;_&gt;", "&lt;/_&gt;", "&lt;/ _&gt;", "&lt;/ A_&gt;", "&lt;/ AB_&gt;", "&lt;/ ABO_&gt;",
	"&lt;/ ABOU_&gt;", "&lt;/ ABOUT_&gt;", "&lt;/ ABOUT _&gt;", "&lt;/ ABOUT M_&gt;", "&lt;/ ABOUT ME_&gt;", "&lt;/ ABOUT ME _&gt;", "&lt;/ ABOUT ME &gt;_", "&lt;/ ABOUT ME &gt;_", "&lt;/ ABOUT ME &gt;"]);
	about_end_title.init();
}
