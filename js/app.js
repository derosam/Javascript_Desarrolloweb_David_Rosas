var myApp = ( function(){
 
  var foo = 'Module Pattern';
  var bar = 'ver 1.0';
 
    
  return {
    myMessage: function(){
      return foo + ' ' + bar;
    },
      
   sum: function( param1, param2 ){
    return param1 + param2;
  }
  
  }
})();
 
console.log( myApp.myMessage() ); // Module Pattern ver 1.0
console.log( myApp.sum( 10, 5 ) ); // myApp.sum is not a function. sum es privada