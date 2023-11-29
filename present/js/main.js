import '../style/style.css'
import { array } from './princesses'
import { DOMSelectors } from './dom';
console.log(array);
console.log (DOMSelectors)


/* DOMSelectors.first.addEventListener("click", function idea () { 
    clearfield ()
    const ar = array.filter((array)=> array.Title === "Little Mermaid")
    ar.forEach ((ar)=> DOMSelectors.box.insertAdjacentHTML("beforeend", `
    <div class="card">
    <div class ="name"> ${ar.Name}</div>
    <img src= ${ar.Image} class="card-img">
        <h3 class="card-desc"> ${ar.Price}</h3>
    </div>`));
}) 

DOMSelectors.second.addEventListener("mousedown", function idea () { 
    clearfield ()
    const arr = array.filter((array)=> array.Title === "Snow White and Seven Dwarves")
    arr.forEach ((arr)=> DOMSelectors.box.insertAdjacentHTML("beforeend", `
    <div class="card">
    <div class ="name"> ${arr.Name}</div>
    <img src= ${arr.Image} class="card-img">
        <h3 class="card-desc"> ${arr.Price}</h3>
    </div>`));
})

DOMSelectors.third.addEventListener("click", function idea () { 
    clearfield ()
    const arrr = array.filter((array)=> array.Title === "Glass Slippers")
    arrr.forEach ((arrr)=> DOMSelectors.box.insertAdjacentHTML("beforeend", `
    <div class="card">
    <div class ="name"> ${arrr.Name}</div>
    <img src= ${arrr.Image} class="card-img">
        <h3 class="card-desc"> ${arrr.Price}</h3>
    </div>`));
}) 
 */

function clearfield ()  {
    DOMSelectors.box.innerHTML = "" ;
    }

 function yes (arr){
    arr.forEach((el)=> {DOMSelectors.box.insertAdjacentHTML("beforeend",  `
    <div class="card">
    <div class ="name"> ${el.Name}</div>
    <img src= ${el.Image} class="card-img">
        <h3 class="card-desc"> ${el.Price}</h3>
    </div>`)})};

let buttons = document.querySelectorAll (".first, .second, .third")
buttons.forEach((btn)=> btn.addEventListener("click", function () {
    let type = btn.textContent
    let newArr = array.filter ((element)=> element.Title === type )
    clearfield ()
    yes (newArr)
    yes (arr)
}))

DOMSelectors.change.addEventListener("click", function (event) {
    event.preventDefault();
 if (document.body.classList.contains("good")){
        document.body.classList.add("bad")
        document.body.classList.remove ("good");
     } else {
            document.body.classList.add("good")
            document.body.classList.remove("bad")
        } 
});