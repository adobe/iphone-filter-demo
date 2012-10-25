tap.js
=======================================

A custom 'tap' event JavaScript plugin for mobile browsers. Contains a fallback to using regular mouse events if touch support is not detected.

Setup
---------------------------------------

First, include the main tap.js JavaScript file in your HTML document:

```
<script src="tap.js"></script>
```

Next create a new Tap instance, passing the element you want to use:

```
var el = document.getElementById('my-id'),
	myTap = new Tap(el);
```

You can then start listening for 'tap' events using the regular JavaScript event listener syntax:

```
el.addEventListener('tap', tapDidOccur, false); 
function tapDidOccur1 (e) {
	//your code
}
```

You can stop listening for tap events like so:

```
el.removeEventListener('tap', tapDidOccur, false);
```
	
Tested web browsers
---------------------------------------

- iOS Safari (5.1)
- Android default browser (2.3.5)
- Opera Mobile 11.50 (Android)
- BlackBerry Playbook (1.0.8.6067)
- HP webOS 2.1.0 (click fallback)
- All modern desktop browsers (click fallback)
	
License
---------------------------------------

Copyright (c) 2012 Alex Gibson

http://alxgbsn.co.uk/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction except as noted below, including without limitation the rights to use, copy, modify, merge, publish, distribute, and/or sublicense, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE