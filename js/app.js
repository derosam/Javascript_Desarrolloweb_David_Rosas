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
    
    function ingreso(tag){
        switch(tag) {
    case "1":
        if(control==true){control=false;numero="";}         
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }        
        break;
    case "2":
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "3":
         if(control==true){control=false;numero="";}       
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "4":
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "5":
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "6":
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "7":
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "8":
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "9":
        if(control==true){control=false;numero="";}        
        if(numero.length<8){
        numero+=tag;        
        document.getElementById("display").innerHTML = numero;   
        }
        break;
    case "0":
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
        operandos=[];
        operadores=[];        
        numero="";        
        document.getElementById("display").innerHTML = "0";   
        break; 
        
        case "mas":
        if(numero!="" || numero=="0"){
        operandos.push(numero);
        operadores.push("+");        
        numero="";        
        document.getElementById("display").innerHTML = "";
                }
        break;
                
        case "menos":
        if(numero!="" || numero=="0"){
        operandos.push(numero);
        operadores.push("-");        
        numero="";        
        document.getElementById("display").innerHTML = ""; 
                }
        break;
                
        case "por":
        if(numero!="" || numero=="0"){
        operandos.push(numero);
        operadores.push("*");        
        numero="";        
        document.getElementById("display").innerHTML = ""; 
                    }
        break;
                
        case "dividido":
        if(numero!="" || numero=="0"){
        operandos.push(numero);
        operadores.push("/");        
        numero="";        
        document.getElementById("display").innerHTML = "";
                }
        break;
                
        /*case "raiz": 
        operandos.push(numero);
        operadores.push("+");
        numero="";        
        //document.getElementById("display").innerHTML = "";   
        break;*/        
                
        case "igual":
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
                         
}console.log(operandos+" --> "+numero);
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