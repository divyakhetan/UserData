var formDiv = document.getElementById('formDiv')
var buttonDiv = document.getElementById('buttonDiv')
var tableDiv = document.getElementById("tableDiv")


function show(element) {
    element.style.display = 'block'
}

function hide(element) {
    element.style.display = 'none'
}

document.querySelector("#adduser").addEventListener("click", (e) => {
    show(formDiv);
    hide(buttonDiv);
})

var i = 1;
var removed = false
document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();
    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var table = document.getElementById('tableData');
    if (removed == false) {
        document.getElementById("tableData").deleteRow(1);
        removed = true
    }
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.onclick = onTableClick;
    cell2.onclick = onTableClick;
    cell3.onclick = onTableClick;
    cell1.innerHTML = i
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    i++;

    show(buttonDiv)
    hide(formDiv)
})

function onTableClick(e) {
    console.log(e)
    var txt = e.target.innerText
    alert(txt);
}
