import _ from 'lodash';
import "./testcss.css";
import "./testsass.scss";
import Icon from './icon.png';
import svgLarge from "./Arctic_big.svg";
import svgSmall from "./small_svg.svg";

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	 // Add the image to our existing div.
	var myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	// Add the large svg to our existing div.
	var myLargeSvg = new Image();
	myLargeSvg.src = svgLarge;	 
	element.appendChild(myLargeSvg);

	// Add the image to our existing div.
	var mySmallSvg = new Image();
	mySmallSvg.src = svgSmall;
	element.appendChild(mySmallSvg);

	return element;
}

document.body.appendChild(component());