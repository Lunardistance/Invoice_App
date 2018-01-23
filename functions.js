// Variable definitions go at the top of the pageXOffset.  Both variable definitions and HTML elements that you grab using document.querySelector() should go at the top

var y="hello"
var state="true"
var element=document.querySelector("div")


// The middle of the page is where you define your functions.
// function blah(){
    // does blah
// })

// function blahBlah(){
    // does blahblah
// }

// at the bottom is where you call your functions or add your event listeners

element.addEventListener("mousedown", function(){
    blahBlah()
}
or

element.addEventListener("mousedown", blahBlah)