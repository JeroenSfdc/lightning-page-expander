({
    handleExpand: function(component, event, helper) {
        const expanded = event.getParam("expanded");
        //TODO: Remove console logging
        console.log('RecordPageWithCollapsiblePaneTemplate.handleExpand. Expanded = ' + expanded);
        component.set("v.isSidebarCollapsed", expanded);
    }
})