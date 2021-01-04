var count = 0;
window.addEventListener("load", loadPage);

let arr = [
  {
    id: 0,
    img:
      "https://assets.website-files.com/5db19bb5bc2c146525fed407/5fae461a1cb98083045e2574_City%20of%20Boston%20career%20development%402x-p-500.jpeg",
    author: "Larsen and Tuborson",
    description: `Envoy helps reinforce our commitment to member experience and raises
                        the bar in terms of professionalism. It’s another way we communicate
                        USC’s excellence`,
  },
  {
    id: 0,
    img:
      "https://images.unsplash.com/photo-1518274449443-895ba8e1ce03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    author: "Larsen and Tuborson",
    description: `Envoy helps reinforce our commitment to member experience and raises
                        the bar in terms of professionalism. It’s another way we communicate
                        USC’s excellence`,
  },
];

console.log(arr);
function loadPage() {
  document.querySelector(".float__button").addEventListener("click", showModal);
  showCards();
  document.querySelector("#submit").addEventListener("click", addItem);
}
const addItem = async () => {
  const response = await fetch(`https://source.unsplash.com/1600x900/?office`);
  var author = document.querySelector(".modal__body>input");
  var authorValue = author.value;
  var description = document.querySelector(".modal__body>textarea");
  var dValue = description.value;
  var url = response.url;
  const obj = {
    id: arr.length,
    img: url,
    author: authorValue,
    description: dValue,
  };
  arr.push(obj);
  localStorage.setItem("photos", JSON.stringify(arr));
  author.value = "";
  description.value = "";
  showCards();
};
function showModal() {
  var ele = document.querySelector(".modal__outer");
  count += 1;
  if (count % 2 !== 0) {
    ele.style.visibility = "visible";
  } else {
    ele.style.visibility = "hidden";
  }
}

function showCards() {
  let output = "";
  for (i in arr) {
    output += `<div class="flex_box">
        <img
          src=${arr[i].img}
          alt=""
        />
        <p class="case_Study">CASE STUDY</p>
        <h1>${arr[i].author}</h1>
        <div class="textbox">
          ${arr[i].description}
        </div>
      </div>
        `;
  }
  document.querySelector(".flex_layout").innerHTML = output;
}