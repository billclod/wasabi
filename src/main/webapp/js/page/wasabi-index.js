/**
 * Daniel
 */
//test jsondata
var testJson=[{"id":"1-1","text":"this 1-1","children":[{"id":"1-1-1","text":"this 1-1-1"}]},{"id":"1-2","text":"this 1-2"},{"id":"1-3","text":"this 1-3"}];

//用传入的jsonData的内容 在指定的区域region生成Tree
function showTree(region,jsonData,fun){
	$("#"+region).tree({
		data:jsonData,
		onClick:fun
	});
}
function itemClick(data){
	var f=$("ltree").tree("isLeaf",data.target);
	if(f){
		alert("create tab");
	}
}
function testTree(){
	showTree("ltree",testJson,itemClick);
	
}
$("document").ready(function(){
	testTree();
});