import '../style/style.css'
import { array } from './princesses'

console.log(array);


document.querySelector(".change").addEventListener("click", function () {
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


const ar = littlemermaid.filter((littlemermaid)=> littlemermaid.name === "Ariel")
littlemermaid.forEach ((littlemermaid)=> console.log(littlemermaid.Name))

    kids.forEach ((kid)=> 
    kid.Siblings.forEach((Sibling) => console.log(Sibling)))
    const out = kids.filter((kid)=> kid.Age < 10)
    console.log(out);


       /*  function poker () {
        DOMSelectors.box.insertAdjacentHTML("beforeend", `
        <div class="card">
        <div class ="h1"> ${littlemermaid.forEach.name}</div>
            <h3 class="card-title"> ${littlemermaid.forEach.price}</h3>
            <img src= ${littlemermaid.forEach.image} class="card-img">
        </div>`)};
        console.log (poker)

 */