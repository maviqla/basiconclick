function addAnswer() {

    submeterReply();
  
    return true;
  }

function submeterReply() {
    let checkvalue = document.getElementById("checkvalue").value;
    let firstradiovalue = document.getElementById("firstradiovalue").value;
    let textboxvalue = document.getElementById("textboxvalue").value;
    let secondradiovalue = document.getElementById("secondradiovalue").value;
    let tableBody = document.getElementById("table-body");

    let html = "<tr>";
  html += "<td>" + checkvalue + "</td>";
  html += "<td>" + firstradiovalue + "</td>";
  html += "<td>" + textboxvalue + "</td>";
  html += "<td>" + secondradiovalue + "</td>";
  html += "</tr>";
  
  tableBody.innerHTML += html;

  return true;

    
   
}