var inp_aspeed = document.getElementById("a_speed"); // Assuming ID of input is 'input-speed'
var inp_as = document.getElementById("a_size");
var inp_gen = document.getElementById("a_generate");
var butts_algos = document.querySelectorAll(".algos button"); // Assuming buttons have this class


var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById('array_container');
cont.style='flex_direction:row';


inp_gen.addEventListener('click',generateArray);
inp_as.addEventListener('input',update_array_size);

var containerWidth = 500;  // Example value
var containerHeight = 300; // Example value

function generateArray() {
    cont.innerHTML = ''; // Clear previous array
    var arrayWidth = cont.clientWidth; // Get the width of #array_container
    var barWidth = arrayWidth / array_size; // Calculate each bar’s width

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min) + 10);
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        
        // Set consistent width and margin
        divs[i].style = `
            width: ${barWidth - 2}px;    /* Subtract a bit to allow space for margin */
            height: ${containerHeight * (div_sizes[i] / 100)}px;
            margin: 1px;
            background-color: blue;
        `;
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generateArray();
}

window.onload = function() {
    update_array_size();
};


for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();
    this.classList.add("butt_selected");
    switch(this.innerHTML.trim().toLowerCase())
    {
        case "bubble":  bubbleSort();
                        break;
        case "insertion":insertionSort();
                        break;
        case "selection":selectionSort();
                        break;
        case "merge":mergeSort();
                        break;
        case "quick":quickSort();
                        break;
    }
}

