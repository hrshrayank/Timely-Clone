// Date and time
// Date object
var today = new Date();

// Current Date
  var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  var date1=today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

  document.getElementById("current_date").innerHTML = date;
  document.getElementById("current_date1").innerHTML = date1;

// if(today.getHours()>12){
//     today.getHours()-12
// }
// Current Time
  var time = today.getHours()-12 + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  document.getElementById("current_time").innerHTML = time;

// /Current time in 12 hours
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("current_time1").innerHTML = time;


  
 




function load_user(){
    var profiledata = localStorage.getItem("profiledata");
  if(typeof profiledata === undefined || profiledata === null){
    profiledata = JSON.stringify({profilefullname:"",primaryemail:"",anotheremail:"",timezone:""});
    localStorage.setItem("profiledata",profiledata);
  }
    return JSON.parse(profiledata);
}

function save_user(profilefullname , primaryemail, anotheremail,timezone){
    profiledata = JSON.stringify({profilefullname:profilefullname,primaryemail:primaryemail,anotheremail:anotheremail,timezone:timezone});
    localStorage.setItem("profiledata",profiledata);
    alert("SucessFully Updated")
      return profiledata;
}

document.getElementById('update').addEventListener("click",function(){
    save_user(
    document.getElementById('profilefullname').value,
    // document.getElementById('workspacelogo').value,
    document.getElementById('primaryemail').value,
    document.getElementById('anotheremail').value,
    document.getElementById("timezone").value
    );
    // console.log(document.getElementById("profilefullname").value)
  profiledata = load_user();
    document.getElementById('profilefullname').value = profiledata.profilefullname;
    // document.getElementById('workspacelogo').value = profiledata.workspacelogo;
    document.getElementById('primaryemail').value = profiledata.primaryemail;
    document.getElementById('anotheremail').value = profiledata.anotheremail;
    document.getElementById('timezone').value = profiledata.timezone;

});

profiledata = load_user();
    document.getElementById('profilefullname').value = profiledata.profilefullname;
    // document.getElementById('workspacelogo').value = profiledata.workspacelogo;
    document.getElementById('primaryemail').value = profiledata.primaryemail;
    document.getElementById('anotheremail').value = profiledata.anotheremail;
    document.getElementById('timezone').value = profiledata.timezone;
