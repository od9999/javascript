var data = ['a','b','c','d'];
 
function getGroup(data, index = 0, group = []) {
	var need_apply = new Array();
	need_apply.push(data[index]);
	for(var i = 0; i < group.length; i++) {
		need_apply.push(group[i] + data[index]);
	}
	group.push.apply(group, need_apply);
 
	if(index + 1 >= data.length) return group;
	else return getGroup(data, index + 1, group);
}
 
console.log(getGroup(data));