
var $filterHolder,
	FILTER_LIST = [
	{name: 'Normal', cl:'test1'},
	{name: 'Amaro', cl:'test2'},
	{name: 'Soft Blur', cl:'softblur'},
	{name: 'B & W', cl:'bnw'},
	{name: 'Old Style', cl:'old-style'},
	{name: 'Saturate', cl:'saturate'},
	{name: 'Rise', cl:'test1'},
	{name: 'Rise', cl:'test1'},
	{name: 'Rise', cl:'test1'},
	{name: 'Rise', cl:'test1'},
	{name: 'Rise', cl:'test1'},
	{name: 'Rise', cl:'test1'},
	{name: 'Rise', cl:'test1'},
	{name: 'Rise', cl:'test1'},
	{name: 'Rise', cl:'test1'},
	{name: 'Rise', cl:'test1'}
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

	newLeft = $element.position().left + $element.width() / 2 + $selectedNotifier.width() / 2;
	$selectedNotifier.css('-webkit-transform', 'translate3d(' + newLeft + 'px, 0px, 0px)');

	//remove classes
	$origContainer.removeClass();
	$filterContainer.removeClass();

	//add filter classes
	$origContainer.addClass($element.data('filter'));
	$filterContainer.addClass($element.data('filter'));
}

function init() {
	$filterHolder = $('#filterHolder');
	$slideHitArea = $('#slideHitArea');

	$('document').bind('touchstart', function (e) {
		e.preventDefault();
	})

	addFilterBtns();
	$('.filter-btn').bind('click', handle_filterBtn_CLICK)
}

$(document).ready(init);