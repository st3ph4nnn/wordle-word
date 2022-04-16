import get_word from './get_word.js'

var colors = ['#325ca8', '#3832a8', '#5732a8', '#7532a8'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('word').style.color = random_color;
document.getElementById('word').innerHTML = get_word();