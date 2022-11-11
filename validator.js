function validator(){
    const password  = document.getElementById('password').value;
    const erro = document.getElementById('erroId');
    // console.log(password);


    if(password === "999"){
        console.log('funcionou 999');
        window.location.href = "https://www.youtube.com/watch?v=jO4-de7rR10"; 

    }
    else{
        erro.classList.remove('erro-not');
        setTimeout(clear, 3000);
        console.log('nao funcionou');
    }
    
        if(password === "105844"){
            console.log('funcionou 105844');
            window.location.href = "ep2/nu1.html"; 
            erro.classList.remove('erro-not');
            erro.classList.add('erro-not');

        }
       
    
}

function clear(){
    const erro = document.getElementById('erroId');
    erro.classList.add('erro-not');
}

     