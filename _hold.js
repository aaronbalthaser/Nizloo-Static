/*
var Nizloo = {

    namespace: function (name) {
        var parts = name.split(".");
        var ns = this;

        for (var i = 0, len = parts.length; i < len; i++) {
            ns[parts[i]] = ns[parts[i]] || {};
            ns = ns[parts[i]];
        }

        return ns;
    }
};

Nizloo.namespace("Utils").resize = (function () {

    var $window = $(window);
    
    function checkBrowserSize() {
		var windowSize = $window.width();		
		return windowSize;
	}
    
    return {
        checkBrowserSize: checkBrowserSize
    };

})();

$(window).resize(function() {
	var result = Nizloo.Utils.resize.checkBrowserSize();
	console.log(result);
});*/
