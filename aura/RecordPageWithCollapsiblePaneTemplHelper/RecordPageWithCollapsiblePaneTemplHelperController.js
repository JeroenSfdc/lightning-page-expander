({
    init: function (component, event, helper) {
        component.set("v.isAppBuilder", window.location.pathname.toLowerCase().startsWith('/flexipageeditor'));
    }
    , handleExpand : function(component, event, helper) {
        if (event != null && event.getParam("expanded") != null) {
            const evt = component.getEvent("recordPageCollapsiblePaneEvent");
            evt.setParams({"expanded": event.getParam("expanded")});
            evt.fire();
        }
     }
})