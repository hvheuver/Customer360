sap.ui.define([
	"sap/ui/core/format/DateFormat"
	], function (DateFormat) {
	"use strict";
	return {

		addLeadingZero: function (sValue) {
			return "00"+sValue;
		},
		
		formatDate: function(sValue) {
			var oInstance = DateFormat.getInstance();
			return oInstance.format(sValue);
		}
	};
});