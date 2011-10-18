/*--------------------------------------------------------------------*\
                                 README                                 
\*--------------------------------------------------------------------*/

The files in this directory comprise an example implementation of search 
engine-friendly hidden content. This example is designed to satisfy the 
guidelines listed below. Moreover, it is intended to demonstrate a set 
of best practices that minimize the risks associated with DHTML, such as 
lower search engine rankings caused by search engines' inability to 
understand JavaScript and DHTML. 

For more information, see the original accompanying article:

Using JavaScript to Hide Content: Advanced White Hat SEO? -
http://sem-group.net/search-engine-optimization-blog/seo/using-javascript-to-hide-content/ 



/*--------------------------------------------------------------------*\
           Basic Implementation Techniques for Content Hiding           
\*--------------------------------------------------------------------*/

User Experience

	Hidden content implementations should improve the User experience and 
	must not impair the User experience. 

Dynamic

	Hidden content elements must have a visible state--a set of conditions 
	under which the hidden content is visible and readable by Users. The 
	visible state must be capable of being activated by a browser event. The 
	event should be automatic (e.g., document.onload) or it should be 
	triggered by Users' actions (e.g., element.onclick). In the case of 
	Users' actions, the trigger element should be conspicuous and 
	intuitive. 

Accessibility

	Hidden content should not be implemented in such a way that it causes 
	the content to be inaccessible to Users with disabilities or Users who 
	rely on screen readers or similar devices. 

Progressive Enhancement

	Hidden content must default to a visible state when rendered in a 
	browser that either doesn't support JavaScript or doesn't have 
	JavaScript enabled. A document in which all hidden content elements are 
	in the default visible state should provide a User interface that is 
	functional, cohesive, and reasonably intuitive. 



/*--------------------------------------------------------------------*\
                                License                                 
\*--------------------------------------------------------------------*/

Copyright 2011, Darren Slatten, http://www.seomofo.com 

Permission is hereby granted, free of charge, to any person obtaining a 
copy of this software and associated documentation files (the 
"Software"), to deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, merge, publish, 
distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so, subject to 
the following conditions: 

The above copyright notice and this permission notice shall be included 
in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
