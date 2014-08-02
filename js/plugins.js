// Panel Animation ------------------------------------ start
// ====================================================

;(function ( $, window, document, undefined ) {

    var panelAnimate = 'panelAnimate',
        defaults = {
            position: 'bottom',
            revealtype: 'mouseover',
            exposed: 10,
            externalcontent: '',
            speed: 200
        };

    function Plugin( element, options ) {
        this.element = element;
        this.id = this.element.id;
        this.options = $.extend( {}, defaults, options);
        this._defaults = defaults;
        this._name = panelAnimate;

        this.init();
    }
    
    Plugin.prototype.showHide = function(keyword, anim) {
    
        var that = this;
        var finalpx = (keyword == 'show') ? 0 : -(this.height - this.options.exposed);
        var position = (this.options.position == 'bottom') ? { bottom:finalpx } : { top:finalpx };
        
        this.$stickybar.stop().animate(position, (anim) ? this.options.speed : 0, function() {
            
            that.$indicator.each(function() {
                var $indicator = $(this);
                $indicator.attr('src', (that.currentState == 'show') ? 
                    $indicator.attr('data-closeimage') : $indicator.attr('data-openimage'));                
            });           
        });
        
        that.currentstate = keyword;
    };
    
    Plugin.prototype.toggle = function() {
        console.log('toggle');
    };

    Plugin.prototype.init = function () {
        var that = this;
        this.$stickybar = $('#' + this.id).css('visibility', 'visible');
        this.height = this.$stickybar.outerHeight();
        this.currentState = 'hide';
        this.options.exposed = Math.min(this.height, this.options.exposed);

        if (this.options.revealtype == 'mouseover') {
            this.$stickybar.on('mouseenter mouseleave', function(e) {
        		that.showHide((e.type == 'mouseenter') ? 'show' : 'hide', true);
    		});
        }
        
        // find images within bar with data attr
        this.$indicator = this.$stickybar.find('img[data-openimage]');
        // find links for toggle behavior
               
        setTimeout(function() {
			that.height = that.$stickybar.outerHeight()
		}, 1000);
		
		this.showHide("hide");
    };

    $.fn[panelAnimate] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + panelAnimate)) {
                $.data(this, 'plugin_' + panelAnimate, 
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );

// Panel Animation ------------------------------------ end
// ====================================================















