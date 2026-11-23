jQuery(function ($) {		 
    if ($.browser.msie) {
    	$('pre').each(function () {
    	    if (this.scrollWidth > this.offsetWidth) {
    		    $(this).css({ 'overflow-y' : 'hidden', 'padding-bottom' : '20px' });
    	    }
    	});
    }
    googleSearchHighlight();
});
