$(function() {
	var now = new Date();
	$('.screen-content')
	.fbMessenger({
			botName: '',
			botLogoUrl: src="https://raw.githubusercontent.com/abosko50/jstesting/master/img/pp.png",
			loop:false
		})
	.fbMessenger('start', { delay: 0 })
	.fbMessenger('typingIndicator', { delay: 1000 })
	.fbMessenger('showGenericTemplate', [
	{
	imageUrl: src="https://raw.githubusercontent.com/abosko50/jtesting2/master/img/hello_pikachu.gif",
	title: '',
	subtitle: '',
	buttons: []
	}
], { delay: 1000 })
	.fbMessenger('typingIndicator', { delay: 1200 })
	.fbMessenger('message', 'bot', 'I\'m <b>Andrew</b>, a digital product designer and researcher', { timestamp: now, delay: 1200 })

	// .fbMessenger('showGenericTemplate', [
	// {
	// imageUrl: src="https://github.com/abosko50/jstesting/blob/master/img/hellopika.gif?raw=true",
	// title: '',
	// subtitle: '',
	// buttons: []
	// }
	// ], { delay: 1500 })

	.fbMessenger('typingIndicator', { delay: 1000 })
	.fbMessenger('message', 'bot', 'I\'m a <b>Design Science Master\'s student</b> at the University of Michigan' , {delay: 1500 })
	.fbMessenger('showGenericTemplate', [
	{
	imageUrl: src="https://raw.githubusercontent.com/abosko50/jtesting2/master/img/michigan_sign.gif",
	title: '',
	subtitle: '',
	buttons: []
	}
	], { delay: 2000 })
	.fbMessenger('typingIndicator', { delay: 2000 })
	.fbMessenger('message', 'bot', 'Feel free to explore my LinkedIn and resume <a href="https://www.linkedin.com/in/andrew-boskovich/" target="_blank">LinkedIn</a> <a href="https://drive.google.com/file/d/1OzZ6Q89sA7nUbfWnJRQR9bHPQpz7WDdP/view" target="_blank">Resume</a>', {delay: 1500 })
	.fbMessenger('typingIndicator', { delay: 500 })
	.fbMessenger('message', 'bot', 'Scroll down for my recent work!', {delay: 1500 })
	.fbMessenger('message', 'bot', 'Don\'t be shy, scroll down!', { timestamp: now, delay: 4000 })

	.fbMessenger('run');
});
