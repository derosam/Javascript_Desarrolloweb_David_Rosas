var calculadora = ( function(){
 
    var numero="";
    var tag="";
    var operandos=[];
    var operadores=[];
    
    function ingreso(tag){
        switch(tag) {
    case "1":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }        
        break;
    case "2":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "3":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "4":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "5":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "6":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "7":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "8":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "9":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "0":
        if(numero.length<9){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;            
    case "punto":
        if(numero.length<9){
        numero+=".";        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "signo":
        if(numero.charAt(0)=="-"){
            numero=numero.slice(1);
            document.getElementById("display").innerHTML = numero; 
        }else{
            numero="-"+numero;
            document.getElementById("display").innerHTML = numero;       
        }        
        break;
                
}
    }

    
  return {
elemento: function (e){
if (e.target)
  	  tag = e.target.getAttribute('ID');
      ingreso(tag);
}       
      

  
  }
})();
 

//console.log( calculadora.sum( 10, 5 ) ); // myApp.sum is not a function. sum es privada

/*elemento: function (e){
  if (e.srcElement)
	  tag = e.srcElement.getAttribute('ID') ;
  else if (e.target)
  	  tag = e.target.getAttribute('ID');
 
  alert("El elemento selecionado ha sido " + tag);
}*/