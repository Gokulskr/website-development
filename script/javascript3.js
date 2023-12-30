function login() {
  let db = {
    0: ["Jaghan@1", "jaghanraj@1"],
    1: ["Gokulskr1", "gokul@1"],
    2: ["hari", "Hari@321"],
    3: ["Sethupathi@123", "Sethu@321"],
  };
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  let flag = false;
  for (let i = 0; i < Object.keys(db).length; i++) {
    if (db[i][0] == user && db[i][1] == pass) {
      flag = true;
    }
  }
  if (flag == true) {
    window.location.href = "./ticketbookmode.html";
  } else {
    alert("Invalid UserName or Invalid Password Try Again !!!");
  }
}
