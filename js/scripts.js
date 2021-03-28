
    // boton funcionando //

    let byton = document.getElementById("suma");
	byton.addEventListener("click", ()=> {


            let num1 = document.getElementById('x').value;
            let num2 = document.getElementById('y').value;

            let x = parseInt(num1);
            let y = parseInt(num2);

            var sumaConcretada = x + y;

            let resulti = document.getElementById("p-cam");
            resulti.innerText = sumaConcretada;
    });

    let buton = document.getElementById("resta");
	buton.addEventListener("click", ()=> {


            let num1 = document.getElementById('x').value;
            let num2 = document.getElementById('y').value;

            let x = parseInt(num1);
            let y = parseInt(num2);

            var restaConcretada = x - y;

            let resulti = document.getElementById("p-cam");
            resulti.innerText = restaConcretada;
    });

    let beton = document.getElementById("multi");
	beton.addEventListener("click", ()=> {


            let num1 = document.getElementById('x').value;
            let num2 = document.getElementById('y').value;

            let x = parseInt(num1);
            let y = parseInt(num2);

            var multiConcretada = x * y;

            let resulti = document.getElementById("p-cam");
            resulti.innerText = multiConcretada;
    });

    let biton = document.getElementById("divi");
	biton.addEventListener("click", ()=> {


            let num1 = document.getElementById('x').value;
            let num2 = document.getElementById('y').value;

            let x = parseInt(num1);
            let y = parseInt(num2);

            var diviConcretada = x / y;

            let resulti = document.getElementById("p-cam");
            resulti.innerText = diviConcretada;
    });

    let bjton = document.getElementById("porcentaje");
	bjton.addEventListener("click", ()=> {


            let num1 = document.getElementById('x').value;
            let num2 = document.getElementById('y').value;

            let x = parseInt(num1);
            let y = parseInt(num2);

            var porConcretada = x % y;

            let resulti = document.getElementById("p-cam");
            resulti.innerText = porConcretada;
    });

    let boton = document.getElementById("boton");
	boton.addEventListener("click", ()=> {

            var primerParrao = document.querySelectorAll("p")[0];
            primerParrao.parentNode.removeChild(primerParrao);
            j++;
    });