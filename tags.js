showTask();
var addTaskInput=document.getElementById("addTaskInput");
var addTaskButton=document.getElementById("addTaskButton");

addTaskButton.addEventListener("click",function(){
    var addTaskInputValue=addTaskInput.value;
    if(addTaskInputValue.trim()){
        var task=localStorage.getItem("localtask");
        if(task == null){
            taskObj= [];
        }else {
            taskObj=JSON.parse(task);
        }
        taskObj.push({task_name: addTaskInputValue});
        localStorage.setItem("localtask",JSON.stringify(taskObj));
        addTaskInput.value="";
    }
    showTask();
});
function showTask() {
    var task=localStorage.getItem("localtask");
        if(task == null){
            taskObj= [];
        }else {
            taskObj=JSON.parse(task);
        }
    var html = "";
    var taskList=document.getElementById("taskList");
    taskObj.forEach(function (item,index){
        html+=`
        <div class="phase">
        <i class="fas fa-briefcase fa-2X"></i>
        <div class="box">${item.task_name}</div>
        <div><button class="delete"onClick="deleteItem(${index})">DELETE</button></div>
        <div><button class="delete" >...</button></div>
        </div>`
    });
    taskList.innerHTML =html;
}

function deleteItem(index) {
    var task =localStorage.getItem("localtask");
    var taskObj=JSON.parse(task);
    taskObj.splice(index,1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();
}


// @nd one
show();
var addTaskInput1=document.getElementById("addTaskInput1");
var addTaskButton1=document.getElementById("addTaskButton1");

addTaskButton1.addEventListener("click",function(){
    var addTaskInput=addTaskInput1.value;
    if(addTaskInput.trim()){
        var phase=localStorage.getItem("phasetask");
        if(phase == null){
            phaseObj= [];
        }else {
            phaseObj=JSON.parse(phase);
        }
        phaseObj.push({phase_name: addTaskInput});
        localStorage.setItem("phasetask",JSON.stringify(phaseObj));
        addTaskInput.value="";
    }
    show();
});
function show() {
    var phase=localStorage.getItem("phasetask");
        if(phase == null){
            phaseObj= [];
        }else {
            phaseObj=JSON.parse(phase);
        }
    var html = "";
    var phaseList=document.getElementById("taskList1");
    phaseObj.forEach(function (item,index){
        // html+= `<tr class="row">
        // <td>${index +1}</td>
        // <td>${item.task_name}</td>
        // <td><button onClick="deleteItem(${index})">DELETE</button></td>
        // </tr>`;
        html+=`
        <div class="phase">
        <i class="fas fa-briefcase fa-2X"></i>
        <div class="box">${item.phase_name}</div>
        <div><button class="delete"onClick="deleteItem1(${index})">DELETE</button></div>
        <div><button class="delete" >...</button></div>
        </div>`
    });
    phaseList.innerHTML =html;
}

function deleteItem1(index) {
    var phase =localStorage.getItem("phasetask");
    var phaseObj=JSON.parse(phase);
    phaseObj.splice(index,1);
    localStorage.setItem("phasetask", JSON.stringify(phaseObj));
    show();
}
