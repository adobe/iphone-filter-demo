
var $filterHolder,
	FILTER_LIST = [
	{filter: 'Normal'},
	{filter: 'Amaro'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Rise'},
	{filter: 'Hudson'}
];


function addFilterBtns() {
	var i = 0,
		holder_width = 0,
		label,
		button;

	for (i; i < FILTER_LIST.length; i += 1) {
		button = $('<div class="filter-btn">');
		label = $('<div class="filter-label">');
		label.html(FILTER_LIST[i].filter);
		button.append(label);
		button.css('left', holder_width);
		$slideHitArea.append(button);
		holder_width += 60;
	}
}

function handle_filterBtn_CLICK(e) {
	var $element = $(this),
		newLeft,
		$selectedNotifier = $('#selectedNotifier');

	newLeft = $element.position().left + $element.width() / 2 + $selectedNotifier.width() / 2;
	$selectedNotifier.css('-webkit-transform', 'translate3d(' + newLeft + 'px, 0px, 0px)');

	//$selectedNotifier.css('left', newLeft);
}

function init() {
	$filterHolder = $('#filterHolder');
	$slideHitArea = $('#slideHitArea');

	addFilterBtns();
	$('.filter-btn').bind('click', handle_filterBtn_CLICK)
}

$(document).ready(init);