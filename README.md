# Pixel Art Maker Project

## To run the Pixel Art Maker 
- open index.html

## Design the table:
- Choose the grid size using the input fields with the desired number of cells and rows.

## Coloring:
- Choose the color you which to paint with using the color pelette.


This project aim is to practics using Javascript coding. It uses a javascript, CSS stylesheet and an html file. 

### How it works:
- The html Includes a form which submits the user choices for the width and height inputs. Upon submitting the user inputs for the table dimensions an eventlistener function in the js file accepts the values for the user inputs. Then two for loops nested within each other, one creates a row using the `insertRow()` javascript function and the second for loop nested, creates cells using `insertCell()` function for every created row. In the nested for loop a click eventlistener responsible for the coloring functionality for every single created cell in the table of squares grabs the color chosen by the user and colors the clicked cell with it. 
