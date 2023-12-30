function via(){
    let f = document.getElementById('from').value ;
    let t = document.getElementById('to').value ;
    if((f=="CHENNAI")&&(t=="TRICHY")){
        window.location.href = "./ticketbooktable1.html"
    }
    else if((f=="CHENNAI")&&(t=="THANJAVUR")){
        window.location.href = "./ticketbooktable2.html"
    }
    else if((f=="TRICHY")&&(t=="CHENNAI")){
        window.location.href = "./ticketbooktable3.html"
    }
    else if((f=="THANJAVUR")&&(t=="CHENNAI")){
        window.location.href = "./ticketbooktable4.html"
    }
    else{
        alert("Invalid Location")
    }
}