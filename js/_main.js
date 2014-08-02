jQuery(document).ready(function($) {
	
	// ------------------------------------------------------------------------------ //
	// Team Member Hover Effect //
	// ------------------------------------------------------------------------------ //

	(function() {

		function signInRegister() {
			var button = $('#signin-button');
		    var box = $('#signin-box');
		    var form = $('#signin-form');
		    
		    
		    button.removeAttr('href');
		    button.mouseup(function(login) {
		        box.toggle();
		        button.toggleClass('active');
		        //console.log(this);
		    });
		    
		    form.mouseup(function() { 
		        return false;
		    });
		    
		    $(this).mouseup(function(login) {
		        if(!($(login.target).parent('#signin-button').length > 0)) {
		            button.removeClass('active');
		            box.hide();
		            
		        }
		    });
		    
		    
		    
		    var button1 = $('#registration-button');
		    var box1 = $('#registration-box');
		    var form1 = $('#register-form');
		    
		    //console.log(button1);
		     //console.log(box1);
		      //console.log(form1);
		    
		    button1.removeAttr('href');
		    button1.mouseup(function(login) {
		        box1.toggle();
		        button1.toggleClass('active');
		        console.log(this);
		    });
		    
		    form.mouseup(function() { 
		        return false;
		    });
		    
		    $(this).mouseup(function(login) {
		        if(!($(login.target).parent('#registration-button').length > 0)) {
		            button1.removeClass('active');
		            box1.hide();
		        }
		    });
		}
		
		signInRegister();

	})();

	// ------------------------------------------------------------------------------ //
	// Equalize the Heights of Elements //
	// ------------------------------------------------------------------------------ //

	(function() {

		$.fn.equalHeights = function(minHeight, maxHeight) {
			tallest = (minHeight) ? minHeight : 0;
			this.each(function() {
				if($(this).height() > tallest) {
					tallest = $(this).height();
				}
			});
			if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
			return this.each(function() {
				$(this).css({'height': tallest});
			});
		}

		// Set Custom Blocks Max Height //
		//---------------------------------------------------------------- //
		var port_item_holder = $('.custom-blocks .block .equal-box');
		port_item_holder.equalHeights();

		$(window).resize(function(){
			port_item_holder.css('height','auto');
			port_item_holder.equalHeights();
		});


		// Set Icon Box Max Height //
		//---------------------------------------------------------------- //
		var ib_container = $('.icon-box.framed-box');
		ib_container.equalHeights();

		$(window).resize(function(){
			ib_container.css('height','auto');
			ib_container.equalHeights();
		});

	})();
	
	// ------------------------------------------------------------------------------ //
	// Check Browser Size //
	// ------------------------------------------------------------------------------ //
    
    (function() {
        
        var $window = $(window);
        
        function checkBrowserSize()
		{
			var windowSize = $window.width();
			
			if (windowSize > 960) {
				
			}
		}
        
        $(window).resize(function() {
			checkBrowserSize();
		});
        
    }());
    
    // ------------------------------------------------------------------------------ //
	// Copyright //
	// ------------------------------------------------------------------------------ //
    
    (function () {

        var currentYear = (new Date).getFullYear();
        $("#year").text(currentYear);

    })();
	
});































