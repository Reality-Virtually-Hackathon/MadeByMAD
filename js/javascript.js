// import 'aframe'
// import 'aframe-mouse-cursor-component'

var wonderTitle = ['Petra, Jordan', 'The Taj Mahal, India', 'The Colossuem, Italy'];

var wonderSky = ['https://farm6.static.flickr.com/5082/5209434257_19baa41784_b.jpg', 'https://c1.staticflickr.com/1/59/231140890_babadb19ef_b.jpg', 'https://c1.staticflickr.com/3/2600/4105964603_f4893ee9a0_b.jpg'];

var builtBy = ['Built By The Nabataeans', 'Built By Emperor Shah Jahan', 'Built By Titus'];
var builtWhen = ['Built in 5th Cent.B.C', 'Built in 1653', 'Built in 80 AD'];
var voice = ['src: #wonder-0', 'src: #wonder-1', 'src: #wonder-2'];

var choice;

$(document).ready(choose());
// $(document).addEventListener('click', chooseOnly());

function chooseOnly()
{
	choice = Math.floor(Math.random()*3);
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
	choice = Math.floor(Math.random()*3);

	selectedWonderTitle = wonderTitle[choice];
	selectedWonderSky = wonderSky[choice];
	selectedVoice = voice[choice];
	selectedBuiltBy = builtBy[choice];
	selectedBuiltWhen = builtWhen[choice];

	$('a-sky').attr('src', selectedWonderSky);
	$('#wonder-title').attr('value', selectedWonderTitle);
	$('#built-by').attr('value', selectedBuiltBy);
	$('#built-when').attr('value', selectedBuiltWhen);

	console.log(choice);
}





//var playSound = $('#sky');
//playSound.play();

//.attr('sound', selectedVoice);




