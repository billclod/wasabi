/**
 * Daniel
 */
// test jsondata
var testJson = [ {
	"id" : "1-1",
	"text" : "this 1-1",
	"children" : [ {
		"id" : "1-1-1",
		"text" : "this 1-1-1"
	} ]
}, {
	"id" : "1-2",
	"text" : "this 1-2"
}, {
	"id" : "1-3",
	"text" : "this 1-3"
} ];

// 用传入的jsonData的内容 在指定的区域region生成Tree
function showTree(region, jsonData, fun) {
	$("#" + region).tree({
		data : jsonData,
		onClick : fun
	});
}
// 传入id,label,content在制定的region创建tab
function addTab(region, id, label, content) {
	
	if (_isExistTab(region,label)) {//如果是已经存在的标签 则显示
		selectTab(region,label);
	} else {//如果标签不存在就创建
		$("#"+region).tabs("add", {
			id : id,
			title : label,
			content : content,
			closable:true
		});
	}
	
}
function selectTab(region,label){
	
	$("#"+region).tabs("select",label);
}
function _isExistTab(region, title) {
	var f=$("#"+region).tabs('exists', title);
	return f;
}
function promptAlert(msg){
	$.messager.alert("提示",msg,"info");
}
function itemClick(data) {
	promptAlert("正在加载页面");
	var f = $("#ltree").tree("isLeaf", data.target);
	if (f) {
		addTab("stabs", data.id, data.text, loadPageContent(data.id));
	}
}
function loadPageContent(id) {
	return "content " + id
}
function testTree() {
	showTree("ltree", testJson, itemClick);

}
$("document").ready(function() {
	testTree();
	$("#stabs").tabs({});
});