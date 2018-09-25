sap.ui.define([
	"com/delaware/hvh/trac2018/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.delaware.hvh.trac2018.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.delaware.hvh.trac2018.view.Detail
		 */
			onInit: function() {
				this.getRouter().getRoute("Detail").attachPatternMatched(this._onRoutingMatched, this);
			},
			
			_onRoutingMatched: function(oEvent){
				var sCustomerNumber = oEvent.getParameter("arguments").customerNumber;
				console.log(sCustomerNumber);
				
				var oModel = this.getView().getModel("ordersModel");
				var self = this;
				oModel.read("/ZV_ZVT18_ORDERS_HVH", {
					urlParameters: "$filter=customer eq '"+sCustomerNumber+"'",
					success: function(oData){
						self.getView().getModel("orderViewModel").setData({"orders":  oData.results});
						console.log(oData.results);
					},
					error: function(oError){
						console.log(oError);
					}
				});
			},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.delaware.hvh.trac2018.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.delaware.hvh.trac2018.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.delaware.hvh.trac2018.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});