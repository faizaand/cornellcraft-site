var images = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png',
    'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png'];

$("#landing").backstretch(images, { duration: 5000, fade: 750, scale: 'cover' });

$(document).ready(function() {
	$('#fullpage').fullpage({
        licenseKey: '',
        navigation: true,
        scrollBar: true
	});
});
