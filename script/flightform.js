function via(){
    let f = document.getElementById('from').value ;
    let t = document.getElementById('to').value ;
    if((f=="CHENNAI")&&(t=="TRICHY")){
        window.location.href = "./ticketbookingflight.html"
    }
    else if((f=="CHENNAI")&&(t=="THANJAVUR")){
        window.location.href = "./ticketbookingflight1.html"
    }
    else if((f=="TRICHY")&&(t=="CHENNAI")){
        window.location.href = "./ticketbookingflight2.html"
    }
    else if((f=="THANJAVUR")&&(t=="CHENNAI")){
        window.location.href = "./ticketbookingflight3.html"
    }
    else{
        alert("Invalid Location")
    }
}