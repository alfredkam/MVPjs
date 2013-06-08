// Backbone.Wreqr (Backbone.Marionette)
// ----------------------------------
// v0.2.0
//
// Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionettejs/backbone.wreqr


Backbone.Wreqr=function(t,n,e){"use strict";var r={};return r.Handlers=function(t,n){var e=function(t){this.options=t,this._wreqrHandlers={},n.isFunction(this.initialize)&&this.initialize(t)};return e.extend=t.Model.extend,n.extend(e.prototype,t.Events,{setHandlers:function(t){n.each(t,function(t,e){var r=null;n.isObject(t)&&!n.isFunction(t)&&(r=t.context,t=t.callback),this.setHandler(e,t,r)},this)},setHandler:function(t,n,e){var r={callback:n,context:e};this._wreqrHandlers[t]=r,this.trigger("handler:add",t,n,e)},hasHandler:function(t){return!!this._wreqrHandlers[t]},getHandler:function(t){var n=this._wreqrHandlers[t];if(!n)throw Error("Handler not found for '"+t+"'");return function(){var t=Array.prototype.slice.apply(arguments);return n.callback.apply(n.context,t)}},removeHandler:function(t){delete this._wreqrHandlers[t]},removeAllHandlers:function(){this._wreqrHandlers={}}}),e}(t,e),r.CommandStorage=function(){var n=function(t){this.options=t,this._commands={},e.isFunction(this.initialize)&&this.initialize(t)};return e.extend(n.prototype,t.Events,{getCommands:function(t){var n=this._commands[t];return n||(n={command:t,instances:[]},this._commands[t]=n),n},addCommand:function(t,n){var e=this.getCommands(t);e.instances.push(n)},clearCommands:function(t){var n=this.getCommands(t);n.instances=[]}}),n}(),r.Commands=function(t){return t.Handlers.extend({storageType:t.CommandStorage,constructor:function(n){this.options=n||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this);var e=Array.prototype.slice.call(arguments);t.Handlers.prototype.constructor.apply(this,e)},execute:function(t,n){t=arguments[0],n=Array.prototype.slice.call(arguments,1),this.hasHandler(t)?this.getHandler(t).apply(this,n):this.storage.addCommand(t,n)},_executeCommands:function(t,n,r){var i=this.storage.getCommands(t);e.each(i.instances,function(t){n.apply(r,t)}),this.storage.clearCommands(t)},_initializeStorage:function(t){var n,r=t.storageType||this.storageType;n=e.isFunction(r)?new r:r,this.storage=n}})}(r),r.RequestResponse=function(t){return t.Handlers.extend({request:function(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return this.getHandler(t).apply(this,n)}})}(r),r.EventAggregator=function(t,n){var e=function(){};return e.extend=t.Model.extend,n.extend(e.prototype,t.Events),e}(t,e),r}(Backbone,Backbone.Marionette,_);
//@ sourceMappingURL=backbone.wreqr.map