/**
 * Copyright 2011, Darren Slatten, http://www.seomofo.com 
 * 
 * MIT License: read the included LICENSE.txt file or go to 
 * http://www.opensource.org/licenses/mit-license.php 
 * 
 * Most of the good ideas, concepts, code patterns, and best practices 
 * found in this script are things I've learned from reading articles 
 * and blog posts by these smart mofos: 
 * 
 *    Dustin Diaz      http://www.dustindiaz.com 
 *    Paul Irish       http://paulirish.com 
 *    Stoyan Stefanov  http://www.phpied.com 
 * 
 * Any bugs or errors you find are my own original creations. 
 * 
 * NOTE: To prevent a FoUC (flash of unstyled content), 
 * this script must be referenced from the page's <head> section. 
 */ 

// Custom object to keep the global namespace clean.
var Mofo = function() {
	return {
		// Add a link tag to the <head> section that loads the js-style.css stylesheet.
		addStylesheet: function() {
			var stylesheet = document.createElement('link');
			stylesheet.setAttribute('rel', 'stylesheet');
			stylesheet.setAttribute('type', 'text/css');
			stylesheet.setAttribute('href', 'css/js-style.css');
			document.getElementsByTagName('head')[0].appendChild(stylesheet);
		},
		// Toggle the trigger's anchor text and the corresponding content's visibility.
		toggleContent: function(a) {
			if (a.parentNode.className == 'article' || a.parentNode.className == 'article hidden') {
				a.parentNode.className = 'article visible';
				a.className = 'trigger off';
				a.innerHTML = 'Hide content';
			}
			else {
				a.parentNode.className = 'article hidden';
				a.className = 'trigger on';
				a.innerHTML = 'Show content';
			}
		},
		// Create a trigger link element and insert it above the given contentElement.
		addTrigger: function(contentElement) {
			var trigger = document.createElement('a');
			trigger.className = 'trigger off';
			trigger.innerHTML = 'Show content';
			trigger.setAttribute('onclick', 'Mofo.toggleContent(this);');
			contentElement.parentNode.insertBefore(trigger, contentElement);
		},
		// Find all <div> elements with the 'content' class and add a trigger link.
		makeTriggers: function() {
			var divs = document.getElementsByTagName('div');
			for (var i = 0; i < divs.length; i++) {
				if (divs[i].className == 'content') {
					Mofo.addTrigger(divs[i]);
				}
			}
		},
		// Make sure the page content is loaded before trying to insert triggers.
		addLoadEvent: function() {
			var onLoad = window.onload;
			if (typeof window.onload != 'function') {
				window.onload = Mofo.makeTriggers;
			}
			else {
				window.onload = function() {
					Mofo.makeTriggers();
					if (onLoad) {
						onLoad();
					}
				}
			}
		}
	};
}();

Mofo.addStylesheet();
Mofo.addLoadEvent();
