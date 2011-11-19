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

		Config: {
			// URL of stylesheet for JavaScript-enabled browsers
			StylesheetURL: 'css/js-style.css',

			// the CSS classes
			ArticleClassVisible: 'article visible',
			ArticleClassHidden: 'article hidden',
			TriggerClassOn: 'trigger on',
			TriggerClassOff: 'trigger off',
			MasterClassOn: 'master trigger on',
			MasterClassOff: 'master trigger off',
			MasterContainerClass: 'master-container',

			// the anchor text to use for trigger links
			TriggerLinkTextOn: 'Show content',
			TriggerLinkTextOff: 'Hide content',
			MasterLinkTextOn: 'Show all',
			MasterLinkTextOff: 'Hide all',
		},

		// Add a <link> tag to the <head> section to load the stylesheet for JavaScript-enabled browsers (e.g., 'css/js-style.css').
		addStylesheet: function() {
			var stylesheet = document.createElement('link');
			stylesheet.setAttribute('rel', 'stylesheet');
			stylesheet.setAttribute('type', 'text/css');
			stylesheet.setAttribute('href', Mofo.Config.StylesheetURL);

			document.getElementsByTagName('head')[0].appendChild(stylesheet);
		},

		// Toggle the trigger's anchor text and the corresponding content's visibility.
		toggleContent: function(trigger) {
			if (trigger.parentNode.className == Mofo.Config.ArticleClassHidden) {
				trigger.parentNode.className = Mofo.Config.ArticleClassVisible;
				trigger.className = Mofo.Config.TriggerClassOff;
				trigger.innerHTML = Mofo.Config.TriggerLinkTextOff;
			}
			else {
				trigger.parentNode.className = Mofo.Config.ArticleClassHidden;
				trigger.className = Mofo.Config.TriggerClassOn;
				trigger.innerHTML = Mofo.Config.TriggerLinkTextOn;
			}
		},

		// Toggle the master trigger's state and set all other trigger states to match it.
		toggleAll: function(masterTrigger) {
			var articleVisibility; // the CSS class of each article's parent element
			var triggerState;      // the CSS class of a trigger link (does not apply to the *master* trigger link)
			var triggerAnchorText; // the anchor text displayed by each trigger link (does not apply to the *master* trigger link)

			if (masterTrigger.className == Mofo.Config.MasterClassOff) {
				masterTrigger.className = Mofo.Config.MasterClassOn;
				masterTrigger.innerHTML = Mofo.Config.MasterLinkTextOff;
				articleVisibility = Mofo.Config.ArticleClassVisible;
				triggerState = Mofo.Config.TriggerClassOff;
				triggerAnchorText = Mofo.Config.TriggerLinkTextOff;
			}
			else if (masterTrigger.className == Mofo.Config.MasterClassOn) {
				masterTrigger.className = Mofo.Config.MasterClassOff;
				masterTrigger.innerHTML = Mofo.Config.MasterLinkTextOn;
				articleVisibility = Mofo.Config.ArticleClassHidden;
				triggerState = Mofo.Config.TriggerClassOn;
				triggerAnchorText = Mofo.Config.TriggerLinkTextOn;
			}

			var anchors = document.getElementsByTagName('a');
			for (var i = 0; i < anchors.length; i++) {
				if ((anchors[i].className == Mofo.Config.TriggerClassOn) || (anchors[i].className == Mofo.Config.TriggerClassOff)) {
					anchors[i].parentNode.className = articleVisibility;
					anchors[i].className = triggerState;
					anchors[i].innerHTML = triggerAnchorText;
				}
			}
		},

		// Create a trigger link element and insert it above the given contentElement.
		addTrigger: function(contentElement) {
			var trigger; // the <a>...</a> element that will be inserted into the document, right before each contentElement

			trigger = document.createElement('a');
			trigger.className = Mofo.Config.TriggerClassOff;
			trigger.innerHTML = Mofo.Config.TriggerLinkTextOn;
			trigger.setAttribute('onclick', 'Mofo.toggleContent(this);');

			contentElement.parentNode.insertBefore(trigger, contentElement);
			contentElement.parentNode.className = Mofo.Config.ArticleClassHidden;
		},

		// Create a master trigger for Show all/Hide all functionality.
		addMasterTrigger: function() {
			var masterContainer; // the master trigger's parent element, which is inserted into the document, right before the <body> element's first child
			var masterTrigger;   // the master <a>...</a> element that will be inserted into the masterContainer element

			masterContainer = document.createElement('div');
			masterContainer.className = Mofo.Config.MasterContainerClass;

			masterTrigger = document.createElement('a');
			masterTrigger.className = Mofo.Config.MasterClassOff;
			masterTrigger.innerHTML = Mofo.Config.MasterLinkTextOn;
			masterTrigger.setAttribute('onclick', 'Mofo.toggleAll(this);');

			document.getElementsByTagName('body')[0].insertBefore(masterContainer, document.getElementsByTagName('body')[0].firstChild);
			masterContainer.appendChild(masterTrigger);
		},

		// Find all <div> elements with the 'content' class and insert a trigger link right before each one.
		makeTriggers: function() {
			var divs = document.getElementsByTagName('div');
			for (var i = 0; i < divs.length; i++) {
				if (divs[i].className == 'content') {
					Mofo.addTrigger(divs[i]);
				}
			}

			Mofo.addMasterTrigger();
		},

		// Insert triggers after the document is finished loading.
		initOnLoad: function() {
			var onLoad; // functions that may already be attached to the onload event by other scripts

			onLoad = window.onload;
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
Mofo.initOnLoad();
