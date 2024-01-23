const DATA = [

    {
      "id": 1,
      "question": "What is Frontend Mentor, and how will it help me?",
      "answer": "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building"
    },
    {
      "id":2,
      "question": "Is Frontend Mentor free?",
      "answer": "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."

  },
  {
    "id":3,
    "question": "Can I use Frontend Mentor projects in my portfolio?",
    "answer": "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"

},

{
    "id":4,
    "question": "  How can I get help if I'm stuck on a Frontend Mentor challenge?",
    "answer": "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."

  },
 
  
]
const result = DATA.map((item)=> `
<div  key=${item.id} >
<div class="div-Q">
<p>${item.question}</p>
<span id="Q1plus-icon">
 <img src="./assets/images/icon-plus.svg" alt="plus" class="add"  id="add">
 <img src="./assets/images/icon-minus.svg" alt="minus" class="hidden minus" id="minus">
</span></div> 
<p class="answer hidden" id="q1-answer">${item.answer}</p>
</div>
`).join("")
document.getElementById("faq").innerHTML = result;
const plus = document.querySelectorAll(".add");
const minus = document.querySelectorAll(".minus");
const par = document.querySelectorAll(".answer");

for(let i = 0; i < plus.length; i++){
  plus[i].addEventListener("click",function(){
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    par[i].classList.toggle("hidden");
  })
}
for(let i = 0; i < minus.length; i++){
  minus[i].addEventListener("click",function(){
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    par[i].classList.toggle("hidden");
  })
}