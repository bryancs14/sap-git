/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"combcuevasa/prueba_github/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
