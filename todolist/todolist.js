
function deletetask(button) {
    button.parentElement.remove();
}
function addtask() {
    console.log("added");
    let task = document.getElementById("task").value;
    document.getElementById("task").value = "";
    task += " ";
    console.log(task);
    let day = document.getElementById("days").value;
    console.log(day);
    if (day == "everyday") {
        let everyday = document.getElementById("everyday");
        console.log(everyday);
        let alldays = everyday.children;
        console.log(alldays);
        let i = 0;
        for (i = 0; i < alldays.length; i++) { 
            console.log(alldays[i]);
            let elementlist = document.createElement("li");
            elementlist.innerHTML = task;

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function () {
                deletetask(this);
            }
            elementlist.append(deleteButton);
            alldays[i].appendChild(elementlist);
        }
        return;

    }
    let elementlist = document.createElement("li");
    elementlist.innerHTML = task;
   
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deletetask(this);
    };
    console.log(elementlist);
    elementlist.append(deleteButton);
    let addlist = document.getElementById(day);
    console.log(addlist);
    addlist.appendChild(elementlist);
}
