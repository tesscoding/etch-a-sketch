let container=document.querySelector(".container");
var gridSize=9;
var headerHeight=10; //vh units
var cellHeight=(100-headerHeight)/gridSize;
var cellWidth=(100/gridSize);
for(var i=0; i<gridSize; i++){
	let row=document.createElement("div");
    row.style.height=cellHeight +"vh";
	//row.style.width="100vh";
	//row.style.border="thin black dashed";
	 for(var j = 0; j < gridSize; j++){ 
            var cell = document.createElement("div"); 
            cell.className = "cell"; 
            cell.style.height="100%";
	        cell.style.width=cellWidth +"vh";
	        cell.style.border="thin black dashed";
	        cell.style.display="inline-block";
            row.appendChild(cell); 
            cell.addEventListener("mouseover", function( event ) {
            console.log(event);   
             // highlight the mouseover target
              	event.target.style.background = "pink";
             }, false);
        } 
	container.appendChild(row);
}

