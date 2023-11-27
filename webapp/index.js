sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel"
], function(Text, JSONModel) {
    "use strict"

//  this.getView().getModel()
    sap.ui.getCore().attachInit(function (){
        //create a JSON Model from a  object literal
        var oModel = new JSONModel({
            greetingText : "Hi, my name is ... John Salt Lake"
        })
        //Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
        //this.getView().setModel(oModel);



        //create a text UI element that displays a hardcoded text string
        new Text({
            text: "{/greetingText}"
        }).placeAt("content") // html body call
    }) 
    
})