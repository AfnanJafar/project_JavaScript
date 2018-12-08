
// Get Elements from HTML
var color = document.getElementById('colorPicker');
var sizePicker = document.getElementById('sizePicker');
var selectedHeight = document.getElementById('inputHeight');
var selectedWidth = document.getElementById('inputWidth');
var table = document.getElementById('pixelCanvas');


// Select size input
sizePicker.addEventListener('submit', function(submitted) {
    submitted.preventDefault();
    makeGrid(selectedHeight.value, selectedWidth.value);
});


// Build the table
function makeGrid(height, width) {
    table.innerHTML = ''; 
    for (var i = 1; i <= height; i++) {
        var newRow = document.createElement('tr');
        var row = table.appendChild(newRow);
        table.appendChild(newRow); // مايضيفلي بالعدد المطلوب
        for (var j = 1; j <= width; j++) {
            var newColumn = document.createElement('td');
            row.appendChild(newColumn);
            cell = row.appendChild(newColumn);
        };
    };
    // Add color to cells
    table.addEventListener('click',  function(addColor) {
        addColor.preventDefault();
        addColor.target.style.backgroundColor = color.value;
    });
};
