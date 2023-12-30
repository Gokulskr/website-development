function via(){
    let f = document.getElementById('from').value ;
    let t = document.getElementById('to').value ;
    if((f=="CHENNAI")&&(t=="TRICHY")){
        window.location.href = "./ticketbookbustable.html"
    }
    else if((f=="CHENNAI")&&(t=="THANJAVUR")){
        window.location.href = "./ticketbookbustable1.html"
    }
    else if((f=="TRICHY")&&(t=="CHENNAI")){
        window.location.href = "./ticketbookbustable2.html"
    }
    else if((f=="THANJAVUR")&&(t=="CHENNAI")){
        window.location.href = "./ticketbookbustable3.html"
    }
    else{
        alert("Invalid Location")
    }
}