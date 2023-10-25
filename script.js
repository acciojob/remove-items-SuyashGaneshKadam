//your JS code here. If required.
let select = document.getElementById("colorSelect");
let button = document.querySelector("input");
button.addEventListener("click", remove);
function remove(){
	let value = select.value;
	let children = select.children;
	for(let i in children){
		if(children[i].innerText == value){
			children[i].remove();
			break;
		}
	}
}