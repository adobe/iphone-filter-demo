
var $filterHolder,
	PHOTO = './img/photo8.png',
	FILTER_LIST = [
		{name: 'Normal', 
			cl: 'normal',
			filterA:'none', 
			filterB: 'none', 
			opacityA: '1', 
			background: ''},
		{name: 'B & W',
			cl: 'bnw', 
			filterA:'grayscale(1)', 
			filterB: 'none', 
			opacityA: '1', 
			background: ''},
		{name: 'Sepia',
			cl: 'sepia', 
			filterA:'sepia(1.0)', 
			filterB: 'none', 
			opacityA: '0.8', 
			background: ''},
		{name: 'Saturate',
			cl: 'saturate', 
			filterA:'sepia(0.2) saturate(3) contrast(1.2)', 
			filterB: 'none', 
			opacityA: '1', 
			background: '-webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 81%,rgba(0,0,0,0.3) 100%), '},
		{name: 'Old Style',
			cl: 'old-style', 
			filterA:'sepia(0.8) saturate(3) brightness(0.25) contrast(2)', 
			filterB: 'none', 
			opacityA: '0.9', 
			background: '-webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%), '},
		{name: 'Vincent',
			cl: 'blue', 
			filterA:'hue-rotate(40deg) contrast(3)', 
			filterB: 'none', 
			opacityA: '0.5', 
			background: ''},
		{name: 'Arno',
			cl: 'red', 
			filterA:'hue-rotate(200deg) contrast(1.2) saturate(2)', 
			filterB: 'none', 
			opacityA: '0.7', 
			background: ''},
		{name: 'Ethan',
			cl: 'green', 
			filterA:'hue-rotate(260deg) contrast(1.2)', 
			filterB: 'none', 
			opacityA: '0.8', 
			background: ''},
		{name: 'Soft Blur',
			cl: 'softblur', 
			filterA:'blur(10px) grayscale(0.8)', 
			filterB: 'grayscale(0.8)', 
			opacityA: '0.5', 
			background: ''}
	];


function addFilterBtns() {
	var i = 0,
		holder_width = 0,
		label,
		button;

	for (i; i < FILTER_LIST.length; i += 1) {
		button = $('<div class="filter-btn">');
		label = $('<div class="filter-label">');
		label.html(FILTER_LIST[i].name);
		button.append(label);
		button.attr('id', FILTER_LIST[i].cl)
		button.css('left', holder_width)
		button.data('filter', i);
		$slideHitArea.append(button);
		$slideHitArea.width(holder_width);
		holder_width += 60;
	}
}

function handle_filterBtn_CLICK(e) {
	var $element = $(this),
		newLeft,
		$selectedNotifier = $('#selectedNotifier'),
		$origContainer = $('#origContainer'),
		$filterContainer = $('#filterContainer'),
		$orig = $('#photoOrig'),
		$filter = $('#photoFilter'),
		id = $element.data('filter');

	newLeft = $element.position().left + $element.width() / 2;
	$selectedNotifier.css('-webkit-transform', 'translate3d(' + newLeft + 'px, 0px, 0px)');
	$orig.css({'background-image': FILTER_LIST[id].background + 'url(' + PHOTO + ')'});
	$filter.css({'background-image': FILTER_LIST[id].background + 'url(' + PHOTO + ')'});
	$filterContainer.css({'opacity': FILTER_LIST[id].opacityA});

	//setTimeout(function () {
	$orig.css({'-webkit-filter': FILTER_LIST[id].filterB});
	$filter.css({'-webkit-filter': FILTER_LIST[id].filterA});
	//}, 400);
}

function init() {
	$filterHolder = $('#filterHolder');
	$slideHitArea = $('#slideHitArea');


	$('document').bind('touchstart', function (e) {
		e.preventDefault();
	});

	$('body').bind('touchmove', function (e) {
		e.preventDefault();
	});

	$('#filterHolder').bind('touchmove', function (e) {
		//e.stopImmediatePropagation();
		e.stopPropagation();
	});

	addFilterBtns();
	$('.filter-btn').bind('click', handle_filterBtn_CLICK)

	var BIG_IMAGE = new Image();
	BIG_IMAGE.src = PHOTO;
	BIG_IMAGE.onload = function () {
		$('#loader').fadeOut();
	}
}

$(document).ready(init);