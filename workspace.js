function load_user(){
    var workspacedata = localStorage.getItem("workspacedata");
  if(typeof workspacedata === undefined || workspacedata === null){
    workspacedata = JSON.stringify({workspacename:"",workspaceweek:"",currency:"",workcapacity:""});
    localStorage.setItem("workspacedata",workspacedata);
  }
    return JSON.parse(workspacedata);
}

function save_user(workspacename , workspaceweek, currency,workcapacity){
    workspacedata = JSON.stringify({workspacename:workspacename,workspaceweek:workspaceweek,currency:currency,workcapacity:workcapacity});
    localStorage.setItem("workspacedata",workspacedata);
    alert("SucessFully Updated")
      return workspacedata;
}

document.getElementById('update').addEventListener("click",function(){
    save_user(
    document.getElementById('workspacename').value,
    // document.getElementById('workspacelogo').value,
    document.getElementById('workspaceweek').value,
    document.getElementById('currency').value,
    document.getElementById("workcapacity").value
    );
    // console.log(document.getElementById("workspacename").value)
  workspacedata = load_user();
    document.getElementById('workspacename').value = workspacedata.workspacename;
    // document.getElementById('workspacelogo').value = workspacedata.workspacelogo;
    document.getElementById('workspaceweek').value = workspacedata.workspaceweek;
    document.getElementById('currency').value = workspacedata.currency;
    document.getElementById('workcapacity').value = workspacedata.workcapacity;

});

workspacedata = load_user();
    document.getElementById('workspacename').value = workspacedata.workspacename;
    // document.getElementById('workspacelogo').value = workspacedata.workspacelogo;
    document.getElementById('workspaceweek').value = workspacedata.workspaceweek;
    document.getElementById('currency').value = workspacedata.currency;
    document.getElementById('workcapacity').value = workspacedata.workcapacity;
