var calculadora = ( function(){
 
    var numero="";
    var num;
    var tag="";
    var operandos=[];
    var operadores=[];
    var punto;
    var espunto;
    var operacion="";
    var i=0;
    var ultimoN;
    var ultimoP;
    var control;
    
    function boton(tag) {
        // Code for Safari
    document.getElementById(tag).style.WebkitTransform = "scale(0.90,0.90)"; 
    // Code for IE9
    document.getElementById(tag).style.msTransform = "scale(0.90,0.90)"; 
    // Standard syntax
    document.getElementById(tag).style.transform = "scale(0.90,0.90)"; 
    
        
        setTimeout(function(){
        // Code for Safari
    document.getElementById(tag).style.WebkitTransform = "scale(1,1)"; 
    // Code for IE9
    document.getElementById(tag).style.msTransform = "scale(1,1)"; 
    // Standard syntax
    document.getElementById(tag).style.transform = "scale(1,1)"; 
    }, 100);
        
}
    
    function ingreso(tag){
        switch(tag) {
    case "1":
        boton(tag);        
        if(control==true){control=false;numero="";}         
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }        
        break;
    case "2":
        boton(tag);        
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "3":
                boton(tag);
         if(control==true){control=false;numero="";}       
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "4":
                boton(tag);
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "5":
                boton(tag);
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "6":
                boton(tag);
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "7":
                boton(tag);
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "8":
                boton(tag);
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "9":
                boton(tag);
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "0":
                boton(tag);
        if(control==true){control=false;numero="";}
        if(numero.length<8){
            if(numero!=""){    
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;
                }else if(numero==""){
                    numero="0.";
                    document.getElementById("display").innerHTML = numero;
                }
        }
        break;            
    case "punto": 
                boton(tag);
        if(control==true){control=false;numero="";}        
        if(numero.length<7){
        if(numero==""){
            numero="0.";
            document.getElementById("display").innerHTML = numero;
        } else{
            var n = numero.indexOf(".");
            if(n==-1){
            numero+=".";        
            document.getElementById("display").innerHTML = numero;
                }
            }   
        }
        break;
    case "signo":
                boton(tag);
        if(control==false){       
        if(numero.charAt(0)=="-"){
            numero=numero.slice(1);
            document.getElementById("display").innerHTML = numero; 
        }else{
            numero="-"+numero;
            document.getElementById("display").innerHTML = numero;       
        } 
                }
        break;
                
        case "on":
                boton(tag);
        operandos=[];
        operadores=[];        
        numero="";        
        document.getElementById("display").innerHTML = "0";   
        break; 
        
        case "mas":
                boton(tag);
        if(numero!="" || numero=="0"){
        operandos.push(numero);
        operadores.push("+");        
        numero="";        
        document.getElementById("display").innerHTML = "";
                }
        break;
                
        case "menos":
                boton(tag);
        if(numero!="" || numero=="0"){
        operandos.push(numero);
        operadores.push("-");        
        numero="";        
        document.getElementById("display").innerHTML = ""; 
                }
        break;
                
        case "por":
                boton(tag);
        if(numero!="" || numero=="0"){
        operandos.push(numero);
        operadores.push("*");        
        numero="";        
        document.getElementById("display").innerHTML = ""; 
                    }
        break;
                
        case "dividido":
                boton(tag);
        if(numero!="" || numero=="0"){
        operandos.push(numero);
        operadores.push("/");        
        numero="";        
        document.getElementById("display").innerHTML = "";
                }
        break;
                
        case "raiz": 
        boton(tag);  
        break;       
                
        case "igual":                     
                boton(tag);
                if(numero!="" && operandos.length>0){
        operandos.push(numero);
        operadores.push("");
                if(operandos.length>1){
                    
        for( i=0;i<operandos.length;i++){
            operacion+=operandos[i]+operadores[i];
        }
        ultimoN=operandos[operandos.length-1];
        ultimoP=operadores[operadores.length-2];             
        operandos=[];
        operadores=[];        
        num=eval(operacion);
        if(num>99999999){ 
                num = num.toExponential(2);
            }                  
        numero=num.toString();            
        numero = numero.slice(0, 8);
        document.getElementById("display").innerHTML = numero;      
        operacion=""; 
        control=true;            
                }
                    } else
        if(control==true){
              
        operacion=numero+ultimoP+ultimoN;        
        num=eval(operacion);
        if(num>99999999){ 
                num = num.toExponential(2);
            }                  
        numero=num.toString();            
        numero = numero.slice(0, 8);
        document.getElementById("display").innerHTML = numero;      
        operacion=""; 
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