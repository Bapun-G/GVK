function nextPage(){

    let gid=document.getElementById("gid").value;


    if(gid==""){

        alert("Please Enter Employee ID");

        return;

    }


    localStorage.setItem("employeeGID",gid);


    window.location.href="details.html";

}


let gid = localStorage.getItem("employeeGID");


// Details page par GID show karega
let showGid = document.getElementById("showGid");

if(showGid){
    showGid.innerHTML = gid;
}


// Date & Time

function updateTime(){

    let now = new Date();

    let date = document.getElementById("date");
    let time = document.getElementById("time");


    if(date && time){

        date.innerHTML = now.toLocaleDateString();

        time.innerHTML = now.toLocaleTimeString();

    }

}

setInterval(updateTime,1000);

updateTime();



function markAttendance(){


    let name=document.getElementById("empName").value;


    if(name==""){

        alert("Please Enter Employee Name");

        return;

    }


    let attendance={

        gid:gid,

        name:name,

        date:new Date().toLocaleDateString(),

        time:new Date().toLocaleTimeString()

    };


    let data=
    JSON.parse(localStorage.getItem("attendanceData")) || [];


    data.push(attendance);


    localStorage.setItem(
        "attendanceData",
        JSON.stringify(data)
    );


    document.getElementById("success").innerHTML=
    "✅ Attendance Marked Successfully";


}