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


const ar = array.filter((array)=> array.title === "Little Mermaid")
console.log (ar);
ar.forEach ((ar)=> 
ar.Name.forEach((Name) => console.log(Name)))

   /*  kids.forEach ((kid)=> 
    kid.Siblings.forEach((Sibling) => console.log(Sibling)))
    const out = kids.filter((kid)=> kid.Age < 10)
    console.log(out);
 */

       /*  function poker () {
        DOMSelectors.box.insertAdjacentHTML("beforeend", `
        <div class="card">
        <div class ="h1"> ${littlemermaid.forEach.name}</div>
            <h3 class="card-title"> ${littlemermaid.forEach.price}</h3>
            <img src= ${littlemermaid.forEach.image} class="card-img">
        </div>`)};
        console.log (poker)

 */