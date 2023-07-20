// function test(){
//     //retrieving the data
//     var uid= document.getElementById("DateCD").value;
//     //storing the data
//      localStorage.setItem("uid",uid);
//     //retrieving the stored data and using it for calculation
//     // var userid = localStorage.getItem("uid",uid);
//     displaySavedData();
// }
// function displaySavedData(){
//     var saveduid = document.getElementById("test");
//     var test = localStorage.getItem("uid");
// }
// displaySavedData();

function freezeData() {
  var form = document.getElementById("form");
  localStorage.setItem("formData", form.elements.value);
}

function retrieveData() {
  var form = document.getElementById("form");
  form.elements.value = localStorage.getItem("formData");
}
