// 1. Load template into template variable
console.log("Loading template");
$.get("template/base.html", function (result) {
     html = result;
     text = $(result).text();
     console.log(text);
});