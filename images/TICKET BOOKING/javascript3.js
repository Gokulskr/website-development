function login(){
    let db = {0:['Raj@123','Raj730@23'],1:['Bharathi@1599','Bhara@123'],2:['Tamizh@123','Tam@321'],3:['Sethupathi@123','Sethu@321']};
    let user = document.getElementById('user').value ;
    let pass = document.getElementById('pass').value ;
    let flag = false ;
    for(let i=0;i< Object.keys(db).length;i++){
        if((db[i][0]==user)&&(db[i][1]==pass)){
            flag = true ;
        }
    }
    if(flag==true){
        window.location.href = "./ticketbookmode.html" ;
    }
    else {
        alert("Invalid UserName or Invalid Password Try Again !!!")
    }
}