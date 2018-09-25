sap.ui.define([
	"com/delaware/hvh/trac2018/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.delaware.hvh.trac2018.controller.App", {
		onInit: function(){
			this.getModel("appView").setProperty("/layout", "OneColumn");
		}
	});
});