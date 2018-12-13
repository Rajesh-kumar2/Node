$(() => {
    var container = $("#mainContainer");
    container.load("/home");
    
    $("#lnkLogo").click(() => {
        container.load("/home");
    });
    
    $("#lnkHome").click(() => {
        container.load("/home");
    });
    
    $("#lnkEmployees").click(() => {
        container.load("/employees");
    });
    $("#lnkEvents").click(() => {
        container.load("/events");
    });
});