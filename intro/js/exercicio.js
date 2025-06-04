        //alert("JFono Beta 1.0")
        //console.log(`Olá ${nome} Seja bem vindo ao JFONO beta 1.0`)
        const frm = document.querySelector("form");    
        const nome = document.getElementById("inNome");
        //event
        // .value
        frm.addEventListener("submit",(e)=>{
            console.log(nome.value);
            //e.preventDefault();
        });
      