
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
		$filterHolder.append(button);
		holder_width += 60;
	}

	$filterHolder.width(holder_width);
}

function handle_filterBtn_CLICK(e) {
	var element = $(this),
		newLeft,
		$selectedNotifier = $('#selectedNotifier');

	newLeft = element.position().left + element.width() / 2 + $selectedNotifier.width() / 2;
	$selectedNotifier.css('left', newLeft);
}

function init() {
	$filterHolder = $('#filterHolder');

	addFilterBtns();
	$('.filter-btn').bind('click', handle_filterBtn_CLICK)
}

$(document).ready(init);