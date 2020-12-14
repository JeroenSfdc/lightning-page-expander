({
    handleExpand: function(component, event, helper) {
        component.set("v.isSidebarCollapsed", event.getParam("expanded"));
    }
})