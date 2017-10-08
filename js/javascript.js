
var wonderTitle = ['Petra, Jordan', 'The Taj Mahal, India', 'The Colossuem, Italy'];

var wonderSky = ['https://farm6.static.flickr.com/5082/5209434257_19baa41784_b.jpg', 'https://c1.staticflickr.com/1/59/231140890_babadb19ef_b.jpg', 'https://c1.staticflickr.com/3/2600/4105964603_f4893ee9a0_b.jpg'];

var builtBy = ['The Nabataeans', 'Emperor Shah Jahan', 'Titus'];
var builtWhen = ['5th Cent.B.C', '1653', '80 AD'];
var voice = ['src: #wonder-0', 'src: #wonder-1', 'src: #wonder-2'];


function choose(array)
{
  return Math.floor(Math.random()*array.length);
}

var choice = choose(wonderTitle);

selectedWonderTitle = wonderTitle[choice];
selectedWonderSky = wonderSky[choice];
selectedVoice = voice[choice];

console.log(selectedVoice);


$('a-text').attr('value', selectedWonderTitle);
$('a-sky').attr('src', selectedWonderSky);

//var playSound = $('#sky');
//playSound.play();

//.attr('sound', selectedVoice);




