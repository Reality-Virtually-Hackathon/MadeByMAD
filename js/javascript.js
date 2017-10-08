
var wonderTitle = ['Petra, Jordan', 'The Taj Mahal, India', 'The Colossuem, Italy', 'The Great Wall of China', 'Chichen Itza, Mexico', 'Cristo Ridentor, Brazil', 'Machhu Pichhu, Peru'];

var wonderSky = ['https://farm6.static.flickr.com/5082/5209434257_19baa41784_b.jpg', 'https://c1.staticflickr.com/1/59/231140890_babadb19ef_b.jpg', 'https://c1.staticflickr.com/3/2600/4105964603_f4893ee9a0_b.jpg', 'http://media.gettyimages.com/photos/the-great-wall-mutian-valley-show-beijing-china-picture-id509568052', 'https://farm4.static.flickr.com/3383/3668448031_0fd6fd2350_b.jpg', 'https://farm8.static.flickr.com/7196/6774865936_4ffb4b98d0_b.jpg','http://media.gettyimages.com/photos/machu-picchu-urubamba-peru-picture-id499708860'];

var builtBy = ['Built by The Nabataeans', 'Built by Emperor Shah Jahan', 'Built by Titus', 'Built by The Ming Dynasty', 'Built by The Mayans', 'Built by many sculptors', 'Built by The Incas'];

var builtWhen = ['Built in 5th Cent.B.C', 'Built in 1653', 'Built in 80 AD', 'Bulti in 1398 AD', 'Built in 600 AD', 'Built in 1931', 'Built in 1450 AD'];

var voice = ['sound/sound-0.mp3', 'sound/sound-1.mp3', 'sound/sound-2.mp3', 'sound/sound-3.mp3', 'sound/sound-4.mp3', 'sound/sound-5.mp3', 'sound/sound-6.mp3'];

var choice;

$(document).ready(choose());

function chooseOnly()
{
	choice = Math.floor(Math.random()*7);
}


//$(document).click(choose());

// var choice = Math.floor(Math.random()*3);

// selectedWonderTitle = wonderTitle[choice];
// selectedWonderSky = wonderSky[choice];
// selectedVoice = voice[choice];
// selectedBuiltBy = builtBy[choice];
// selectedBuiltWhen = builtWhen[choice];

// $('a-sky').attr('src', selectedWonderSky);
// $('#wonder-title').attr('value', selectedWonderTitle);
// $('#built-by').attr('value', selectedBuiltBy);
// $('#built-when').attr('value', selectedBuiltWhen);


function choose()
{
	choice = Math.floor(Math.random()*7);

	selectedWonderTitle = wonderTitle[choice];
	selectedWonderSky = wonderSky[choice];
	selectedVoice = voice[choice];
	selectedBuiltBy = builtBy[choice];
	selectedBuiltWhen = builtWhen[choice];
	selectedVoice = voice[choice];

	$('a-sky').attr('src', selectedWonderSky);
	$('#wonder-title').attr('value', selectedWonderTitle);
	$('#built-by').attr('value', selectedBuiltBy);
	$('#built-when').attr('value', selectedBuiltWhen);
	$('#narration-sound').attr('src', selectedVoice);

	console.log(choice);
}




