import '../style/style.css'
import { littlemermaid } from './princesses'
import {snowwhitesevendwarves} from './princesses'

console.log(littlemermaid);
console.log (snowwhitesevendwarves)

document.querySelector(".change").addEventListener("click", function () {
 if (document.body.classList.contains("good")){
        document.body.classList.add("bad")
        document.body.classList.remove ("good");
     } else {
            document.body.classList.add("good")
            document.body.classList.remove("bad")
        } 
})

