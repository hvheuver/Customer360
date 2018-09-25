sap.ui.define([
	"com/delaware/hvh/trac2018/controller/BaseController",
	"com/delaware/hvh/trac2018/model/formatter"
], function (BaseController, formatter) {
	"use strict";

	return BaseController.extend("com.delaware.hvh.trac2018.controller.Master", {
		formatter:formatter,
		
		onCustomerPress: function(oEvent){
			var oCustomer = oEvent.getSource().getBindingContext().getObject();
			this.getView().getModel("customerModel").setData({"customer" : oCustomer});
			
			this.getRouter().navTo("Detail", {
				customerNumber: oCustomer.CustomerNumber
			});
			
			this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.delaware.hvh.trac2018.view.Master
		 */
		onInit: function() {
			this.oRouter = this.getRouter();
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.delaware.hvh.trac2018.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.delaware.hvh.trac2018.view.Master
		 */
		 
		 /*
		 CustomerNumber: "1000026"
		city: "Coyoacan"
		country: "Mexico"
		countrykey: "MX"
		name: "Cafe El Jarocho"
		sortfield1: ""
		sortfield2: ""
		 */
		onAfterRendering: function() {
				// var oModel = this.getView().getModel();
				// var self = this;
				// oModel.read("/ZV_ZVT18_CUSTM_HVH", {
				// 	success: function(oData){
				// 		self.getView().getModel("customersModel").setData({
				// 			"customers": oData.results	
				// 		});
				// 		console.log(oData);
				// 	},
				// 	error: function(oError){
				// 		console.log(oError);
				// 	}
				// });
			},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.delaware.hvh.trac2018.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});