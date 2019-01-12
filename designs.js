// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// When clicking submit a function is called, which itself calls makeGrid() function.
document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});


function makeGrid() {

// Your code goes here!

    
    // 3 variables that are used to bind to DOM elements that will be used.
    let canvasWidth = document.getElementById('inputWidth').value;
    let canvasHeight = document.getElementById('inputHeight').value;
    let table= document.getElementById("pixelCanvas");


// Every time makeGrid is called after clicking submit, the table rows and cells are set to null, to allow creating a new grid.
    table.innerHTML = "";

 
  // for every single count, counting from 0 till the user input of the number of rows and  in the second loop, cells, we add 
  // a row and cell for each index
    for (let i = 0; i < canvasHeight ; i++) {
        let row = table.insertRow(i);
        for (let u = 0; u < canvasWidth; u++) {
            let cell = row.insertCell(u);

  
// eventlistener lets a color that the user chooses to be the value of the cell -function argument- 
// css style background color.
            cell.addEventListener('click', function(event){
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        }
    }
}
