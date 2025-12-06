function addUser() {
    let fnameElement = document.getElementById('fname');
    let lnameElement = document.getElementById('lname');
    let ageElement = document.getElementById('age');
 
    let fname = fnameElement.value;
    let lname = lnameElement.value;
    let age = ageElement.value;
 
    let table = document.getElementById('usertable');
 
    let row = document.createElement('tr');
 
    let cell1 = document.createElement('td');
    cell1.innerText = fname;
 
    let cell2 = document.createElement('td');
    cell2.innerText = lname;
 
    let cell3 = document.createElement('td');
    cell3.innerText = age;
 
    // Create delete button
    let cell4 = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
 
    deleteBtn.onclick = function() {
        row.remove();
    };
 
    cell4.appendChild(deleteBtn);
 
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
 
    table.appendChild(row);
}
 
 
function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
}