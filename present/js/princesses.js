export {littlemermaid}
export {snowwhitesevendwarves}

const littlemermaid = [
    {
        Name: " Ariel",
        Image: '/Ariel.jpg',
        Price: "$22.90",
    },  
    {
        Name: "Ursula",
        Image: '/Urusla.jpg',
       Price: "10.90",
    },
     {Name: "Max the Dog",
    Image: '/MaxtheDog.jpg',
   Price: "10.90", },
  
   {Name: "Prince Eric",
    Image: '/PrinceEric.jpg',
   Price: "10.90" ,},

   {Name: "Lobster",
    Image: "/SebastianLoster.jpg",
   Price: "10.90" ,},

    ];
    console.log (littlemermaid)

    const snowwhitesevendwarves = [
        {
            Name: " Snow",
            Image: 'https://m.media-amazon.com/images/I/91Wx8zpDbhL.jpg',
            Price: "$2.90"
        },  
        {
            Name: "Prince",
            Image: 'https://static.wikia.nocookie.net/princessdisney/images/a/ab/Florian.png/revision/latest?cb=20130709121636',
           Price: "108.90",
        },
    
    ]
    console.log (snowwhitesevendwarves)

    const DOMSelectors = {
        first:document.querySelector(".first"), 
        second:document.querySelector(".second"),
        third:document.querySelector(".third"),
        fourth:document.querySelector(".fourth"),
        fifth:document.querySelector(".fifth"),}
    
        DOMSelectors.first.addEventListener("click" ,function (event) { 
            event.preventDefault();
            console.log (littlemermaid); })
    


