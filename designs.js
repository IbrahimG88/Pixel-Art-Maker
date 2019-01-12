// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});


function makeGrid() {

// Your code goes here!

    let canvasWidth = document.getElementById('inputWidth').value;
    let canvasHeight = document.getElementById('inputHeight').value;

    let table= document.getElementById("pixelCanvas");



    table.innerHTML = "";


    let coloring = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = chosenColor.val();
        });
    }

    for (let i = 0; i < canvasHeight ; i++) {
        let row = table.insertRow(i);
        for (let u = 0; u < canvasWidth; u++) {
            let cell = row.insertCell(u);


            cell.addEventListener('click', function(event){
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        }
    }
}
