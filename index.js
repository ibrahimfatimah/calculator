function clean() {
    let read = ""
    document.getElementById("show-el").innerHTML = read
    document.getElementById("showing-el").innerHTML = read
    console.log(read)
}



function display(x) {

    console.log(x)
    let showEl = document.getElementById("show-el")
    showEl.innerHTML += x

    
   
}    
 function calculate() {


    
    let showEl = eval(document.getElementById("show-el").innerHTML)

    document.getElementById("showing-el").innerHTML = (eval(document.getElementById("show-el").innerHTML))
    
     
    console.log(eval(document.getElementById("show-el").innerHTML))
    
 }

 function del(){
    let showEl = document.getElementById("show-el").innerHTML
    let newShow = showEl.slice(0,showEl.length-1)
    document.getElementById("show-el").innerHTML = newShow


 }