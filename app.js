let container=document.querySelector(".container");
var yGridSize=16;
var xGridSize=yGridSize;
var headerHeight=10; //vh units
var cellWidth=(100/xGridSize);
var button=document.querySelector("button");
button.addEventListener("click",  reset);
createGrid();


function createGrid(){
//create the grid- first create a div called row, then append cell divs to them in a line
//add a grid wrap-around so the grid can be centred in the container
let grid=document.createElement("div");
container.appendChild(grid);
	for(var i=0; i<yGridSize; i++){
		let row=document.createElement("div");
		var cellHeight=(100-headerHeight)/yGridSize;
	    row.style.height=cellHeight +"vh";
	    row.className="row";
		//row.style.width="100vh";
		//row.style.border="thin black dashed";
		 for(var j = 0; j < xGridSize; j++){ 
	            var cell = document.createElement("div"); 
	            cell.className = "cell"; 
	            cell.style.height="100%";
		        //cell.style.width=cellWidth +"vw"; 
		        cell.style.width=cellHeight +"vh";
		        cell.style.border="thin #5085A5 dashed";
		        cell.style.display="inline-block"; //makes the cells display in a line
	            row.appendChild(cell); 

	            cell.addEventListener("mouseover", function( event ) {
	 
	             // highlight the mouseover target
	              	event.target.style.background = "#F7F9FB";
	             }, false);
	        } 
		grid.appendChild(row);
	}
}

function reset(){
	var cells=document.querySelectorAll(".cell");
	var rows=document.querySelectorAll(".row");
	//cells.forEach(cell=>{cell.style.background="#31708E"});
	cells.forEach(cell=> cell.parentNode.removeChild(cell));
	rows.forEach(row => row.parentNode.removeChild(row));
	yGridSize=window.prompt("What size square?", "16");
	xGridSize=yGridSize;
	createGrid();
}

