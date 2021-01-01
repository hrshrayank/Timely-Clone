window.addEventListener("load", loadPage);
var parent;

function loadPage() {
  var greyDiv = document.querySelectorAll(".box__on__hover");
  for (let i = 0; i < greyDiv.length; i++) {
    greyDiv[i].addEventListener("click", modal);
  }
  setInputDate(greyDiv);

  var topics = document.querySelectorAll(
    ".container__right__header>.button_group>button"
  );
  for (var i = 0; i < topics.length; i++) {
    topics[i].addEventListener("click", Changer);
  }
  document.getElementById("clearLocalStorage").addEventListener("click", () => {
    localStorage.removeItem("memory");
    showData();
  });
  showData();
}

function Changer(e) {
  var ele1 = document.getElementById("week__div");
  var ele2 = document.getElementById("month__div");
  var ele3 = document.getElementById("day__div");

  ele1.style.visibility = "hidden";
  ele2.style.visibility = "hidden";
  ele3.style.visibility = "hidden";

  var button = e.target;
  if (button.id == "day") {
    ele3.style.visibility = "visible";
  }
  if (button.id == "month") {
    ele2.style.visibility = "visible";
  }
  if (button.id == "week") {
    ele1.style.visibility = "visible";
  }
}

function setInputDate(greyDiv) {
  var dateInput = document.getElementById("date");
  var d = new Date();
  var str = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
  dateInput.placeholder = str;
  greyDiv[d.getDay()].style.opacity = "1";
  var ul_grey = document.querySelectorAll(".table>ul");
  ul_grey[d.getDay()].style.backgroundColor = "rgb(247, 242, 242)";

  var dayspermonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  var month = d.getMonth();
  let output = "";
  for (let i = 0; i < dayspermonth[month]; i++) {
    output += `<div>
                    <p>day${i + 1}
                </div>
                `;
  }
  document.querySelector(".month__div").innerHTML = output;
}

function modal(e) {
  var modal = document.querySelector(".modal__bg");
  modal.classList.add("show_box");
  parent = e.target.parentNode.parentNode.id;

  var cancelButton = document.querySelector(".btn__group #cancel");
  cancelButton.addEventListener("click", () => {
    modal.classList.remove("show_box");
  });

  var submitButton = document.querySelector(".btn__group #submit");

  submitButton.addEventListener("click", (e) => {
    var work = document.querySelector("#work");
    var project = document.querySelector("#project");
    var workValue = work.value;
    var projectValue = project.value;
    if (workValue.trim() && projectValue.trim()) {
      console.log(workValue, projectValue);
      var task = localStorage.getItem("memory");
      if (task == null) {
        taskobj = [];
      } else {
        taskobj = JSON.parse(task);
      }
      taskobj.push({ work: work.value, project: project.value, ul: parent });
      console.log(taskobj);
      localStorage.setItem("memory", JSON.stringify(taskobj));
      work.value = "";
      project.value = "";
    }
    showData();
  });
}
function showData() {
  var taskObj = JSON.parse(localStorage.getItem("memory"));
  var ulList = document.querySelectorAll("#week__div>ul");

  for (let i in taskObj) {
    for (let j in ulList) {
      let output;
      if (taskObj[i].ul === ulList[j].id) {
        output = `<div class="data1">
        <p>${taskObj[i].work}</p>
        <p>${taskObj[i].project}
        </div>`;
        document.querySelector(
          `#${ulList[j].id}>li:nth-child(6)`
        ).innerHTML = output;
      }
    }
  }
  var daytask = "";
  for (i in taskObj) {
    if (taskObj[i].work) {
      daytask += `<div class="data">
                        <div>
                        <p>${taskObj[i].work}</p>
                        <p>${taskObj[i].project}</p>
                        
                        </div>
                        
                        <button onclick="deleteData('${taskObj[i].work}')"id="delete_data">Delete </button>
                        </div>`;
    }
  }
  document.querySelector(".day__task__list").innerHTML = daytask;
}
function deleteData(work) {
  const todolist = JSON.parse(localStorage.getItem("memory"));
  let newList = todolist.filter((item) => {
    return item.work !== work;
  });
  localStorage.clear();
  localStorage.setItem("memory", JSON.stringify(newList));
  showData();
}
