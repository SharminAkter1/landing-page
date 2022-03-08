const quotes  = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, qui?", author: "Lorem"
   },
   {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing", author: "Ipsum"
   },
   {
    quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatibus optio quo accusantium unde corrupti nihil, ratione dicta dolor quidem.", author: "Dolor"
   },
   {
    quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatibus optio quo accusantium unde corrupti nihil,", author: "- Author"
   },
   {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, qui?", author: "- Author -"
   },
   {
    quote: "Lorem ipsum dolor sit amet", author: "-- Author --"
   },
   {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, qui? Reprehenderit voluptatibus", author: "Author"
   },
   {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, qui?", author: "Lorem"
   },
   {
    quote: "Lorem ipsum dolor ", author: "Lorem"
   },

]

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
   let random = Math.floor(Math.random() * quotes.length);
   console.log(random);

   document.querySelector("#quote").textContent = quotes[random].quote;

   document.querySelector("#author").textContent = quotes[random].author;
});