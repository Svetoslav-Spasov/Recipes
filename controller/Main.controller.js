sap.ui.define([
	'sap/m/MessageBox',
	"sap/ui/core/mvc/Controller"
], function(MessageBox, Controller) {
	"use strict";

	return Controller.extend("Recipes.controller.Main", {
		onListItemPress: function (oEvent) {
		    var oSelectedItem = oEvent.getSource();
		    var oContext = oSelectedItem.getBindingContext("recipe");
		    var sPath = oContext.getPath();
			var app = this.getView().byId("app");
			var page = app.getPage("__xmlview1--detailsPage");
			page.bindElement({ path: sPath, model: "recipe" });
			app.to(page);
		},
		onNavBack: function () {
			var app = this.getView().byId("app");
			app.back();
		},
		onRate: function () {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.success(
				"Thank you for rating! Your opinion is important for us!",
				{
					styleClass: bCompact? "sapUiSizeCompact" : ""
				}
			);
		}
	});

});