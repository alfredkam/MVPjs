/*
 * This is the starting point of the javascript. It chooses whether to load the producion,
 * a compiled and minified javascript file in build, or use requirejs loading of scripts ("dev").
 * 
 * replace "sitename" with the proper namespace.
 */
(function(){
	
	//TODO: Change the sitename to whatever your site name is.
	var sitename = "sitename";
	
	window[sitename] = window[sitename] || {};
	var namespace = window[sitename];
	
	var config = (namespace.config = namespace.config || {});
	
	//TODO: Change to either "dev" or "production"
	config.env = "dev"
	
	var dev = {
			DEBUG: true
	};	
	
	var production = {
		DEBUG: false	
	};
	
	config.dev = config.dev || {};
	for(var attr in dev)
	{
		config.dev[attr] = dev[attr];
	}
	
	config.production = config.production || {};
	for(var attr in production)
	{
		config.production[attr] = production[attr];
	}
	
	namespace.getConfig = function(){
		return this.config[this.config.env];
	};
	
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	
	if(config.env === "dev")
	{
		script.setAttribute("data-main", "js/main/"+sitename+"-main.js");
		script.setAttribute("src", "lib/require/require.js");
	}
	
	else if(config.env === "production")
	{
		script.setAttribute("src", "js/build/"+sitename+".js");
	}
	
	document.getElementsByTagName("body")[0].appendChild(script);
})();