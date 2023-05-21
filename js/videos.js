function videos_scroll_event()
{
	if (!is_safari())
	{
		let videos = document.querySelectorAll('video');

		for (let video of videos)
			if (video.readyState == 4)
			{
				if (video.getBoundingClientRect().top <= window.innerHeight && video.getBoundingClientRect().bottom >= 0 && video.paused)
				{
					video.parentNode.querySelector('img').style.opacity = '0';
					video.play();
				}

				else if ((video.getBoundingClientRect().top > window.innerHeight || video.getBoundingClientRect().bottom < 0) && !video.paused)
					video.pause();
			}
	}
}

function videos_events()
{
	if (!is_safari())
	{
		window.setTimeout(() =>
		{
			let videos = document.querySelectorAll('video');

			for (let video of videos)
				if (video.readyState != 4)
					video.load();
		}, 1000);

		window.addEventListener('scroll', videos_scroll_event);
		window.addEventListener('resize', videos_scroll_event);
		window.setInterval(videos_scroll_event, 1000);
	}
}
