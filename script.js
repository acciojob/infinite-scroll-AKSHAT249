//your code here!
let data = ["Item1", "Item2","Item3", "Item4","Item5", "Item6","Item7", "Item8","Item9", "Item10"]
let liste = document.getElementById("infi-list");

function renderList() {
	liste.innerHTML = ""
	data.map( (item)=> {
		liste.innerHTML += `
			<li>${item}</li>
		`
	})
}


liste.addEventListener("scrollend", (event) => {
	let length = data.length;
	
	data.push(`Item${length+1}`)
	data.push(`Item${length+2}`)
	renderList();
	
});


renderList();
