import '../style/style.css'
import { array } from './princesses'
import { DOMSelectors } from './dom';
console.log(array);
console.log (DOMSelectors)


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

DOMSelectors.first.addEventListener("click", function idea (event) { 
    event.preventDefault();
    clearfields (event)
    const ar = array.filter((array)=> array.Title === "Little Mermaid")
    ar.forEach ((ar)=> DOMSelectors.box.insertAdjacentHTML("beforeend", `
    <div class="card">
    <div class ="name"> ${ar.Name}</div>
    <img src= ${ar.Image} class="card-img">
        <h3 class="card-desc"> ${ar.Price}</h3>
    </div>`));
})

DOMSelectors.second.addEventListener("mousedown", function idea (twice) { 
    clearfields (twice)
    const arr = array.filter((array)=> array.Title === "Snow White and Seven Dwarves")
    arr.forEach ((arr)=> DOMSelectors.box.insertAdjacentHTML("beforeend", `
    <div class="card">
    <div class ="name"> ${arr.Name}</div>
    <img src= ${arr.Image} class="card-img">
        <h3 class="card-desc"> ${arr.Price}</h3>
    </div>`));
})

DOMSelectors.third.addEventListener("click", function idea (thrice) { 
    clearfields (thrice)
    const arrr = array.filter((array)=> array.Title === "Glass Slippers")
    arrr.forEach ((arrr)=> DOMSelectors.box.insertAdjacentHTML("beforeend", `
    <div class="card">
    <div class ="name"> ${arrr.Name}</div>
    <img src= ${arrr.Image} class="card-img">
        <h3 class="card-desc"> ${arrr.Price}</h3>
    </div>`));
}) 

function clearfields ()  {
    DOMSelectors.box.value = "" ;

    }














 
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