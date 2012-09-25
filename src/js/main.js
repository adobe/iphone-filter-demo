
var $filterHolder,
	FILTER_LIST = [
	{name: 'Normal', cl:'normal'},
	{name: 'B & W', cl:'bnw'},
	{name: 'Sepia', cl:'sepia'},
	{name: 'Saturate', cl:'saturate'},
	{name: 'Old Style', cl:'old-style'},
	{name: 'Vincent', cl:'blue'},
	{name: 'Arno', cl:'red'},
	{name: 'Ethan', cl:'green'},
	{name: 'Soft Blur', cl:'softblur'}
	],
	FILTER_VALUES = [
		{name: 'normal', filterA:'none', filterB: 'none', opacityA: '1'},
		{name: 'bnw', filterA:'grayscale(1)', filterB: 'none', opacityA: '1'},
		{name: 'sepia', filterA:'sepia(1.0)', filterB: 'none', opacityA: '0.8'},
		{name: 'saturate', filterA:'sepia(0.2) saturate(3) contrast(1.2)', filterB: '', opacityA: '0.8'},
		{name: 'old-style', filterA:'sepia(1.0)', filterB: '', opacityA: '0.8'},
		{name: 'blue', filterA:'sepia(1.0)', filterB: '', opacityA: '0.8'},
		{name: 'red', filterA:'sepia(1.0)', filterB: '', opacityA: '0.8'},
		{name: 'green', filterA:'sepia(1.0)', filterB: '', opacityA: '0.8'},
		{name: 'softblur', filterA:'sepia(1.0)', filterB: '', opacityA: '0.8'}
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
		button.data('filter', FILTER_LIST[i].cl);
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
		$filterContainer = $('#filterContainer');

	newLeft = $element.position().left + $element.width() / 2;
	$selectedNotifier.css('-webkit-transform', 'translate3d(' + newLeft + 'px, 0px, 0px)');

	//setTimeout(function () {
		//remove classes
		$origContainer.removeClass();
		$filterContainer.removeClass();

		//add filter classes
		$origContainer.addClass($element.data('filter'));
		$filterContainer.addClass($element.data('filter'));
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
}

$(document).ready(init);