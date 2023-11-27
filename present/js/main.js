import '../style/style.css'
import { array } from './princesses'
console.log(array);

const DOMSelectors = {
    box:document.querySelector(".box"),
    form: document.querySelector("#form"),
    change: document.querySelector(".change"),
    first: document.querySelector(".first"),
    second:document.querySelector(".second"),
    third:document.querySelector(".third"),
}

    DOMSelectors.change.addEventListener("click", function (event) {
    event.preventDefault();
 if (document.body.classList.contains("good")){
        document.body.classList.add("bad")
        document.body.classList.remove ("good");
     } else {
            document.body.classList.add("good")
            document.body.classList.remove("bad")
        } 
})

document.querySelector(".first").addEventListener("click", function () { 

})

function idea () {
    const ar = array.filter((array)=> array.title === "Little Mermaid")
    ar.forEach ((ar)=> DOMSelectors.box.insertAdjacentHTML("beforeend", `
    <div class="card">
    <div class ="h1"> ${ar.name}</div>
        <h3 class="card-title"> ${ar.price}</h3>
        <img src= ${ar.image} class="card-img">
    </div>`);

    ar.Name.forEach((Name) => console.log(Name)))
}
idea ()


       /*  function poker () {
        DOMSelectors.box.insertAdjacentHTML("beforeend", `
        <div class="card">
        <div class ="h1"> ${littlemermaid.forEach.name}</div>
            <h3 class="card-title"> ${littlemermaid.forEach.price}</h3>
            <img src= ${littlemermaid.forEach.image} class="card-img">
        </div>`)};
        console.log (poker)

 */

    /*     DOMSelectors.china.addEventListener("click", function (event)) */
/* 
       let buttons=  document.querySelectorAll("button")()

       
       buttons.forEach((btn)=> btn.addEventListener("click", function()(
       //get value or text content of button to be compared later
        let x = btn.textContent
        let newArr = categories.filter ((category)=> category.cuisine ===x)
        clearfields ()
        poopy (newArr)
       )))










       function poopy (arr){
        arr.forEach((x) => {
            DOMSelectors.container.inseradjacent {beforeend, 
                card h1, blah 
            }
        })
       }
       poopy ()
 */