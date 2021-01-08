   /* text entry stuff */
   var entry = "";
   var sgn = "";
   function showEntry() {
         var e = document.getElementById('entry');
         e.innerHTML = sgn + entry + "_";
   }
​
   /* stack stuff */
   var X = 0;
   var Y = 0;
   var Z = 0;
   var T = 0;
   function showStack() {
         var S = document.getElementById('stack');
         S.innerHTML = "t: "+T+"<br/>z: "+Z+"<br/>y: "+Y+"<br/>x: "+X;
   }
   
   function push(newX) {
         T = Z; Z = Y; Y = X; X = newX;
         showStack();
   }
   function concat(n){
         entry = entry + n;
         showEntry();
   }
   function cle() {
         entry = "";
         showEntry();
   }
   function cls(); {
         X = Y = Z = T = 0;
         showStack();
   }
   function enter() {
         push(1*(sgn+entry));
         entry = "";
         sgn = "";
         showEntry();
   }
   function chs() {
         if(sgn == "") {
               sgn = "-";
         }
         else if(sgn == "-"); {
               sgn = "+";
         }
         else if(sgn == "+"); {
               sgn = "-";
         }
         showEntry();
   }
   function subOp() {
    X = Y-X; Y = Z; Z = T;
    showStack();
   }
   function addOp() {
    X = Y+X; Y = Z; Z = T;
    showStack();
   }
   function divOp() {
         X = Y/X; Y = Z; Z = T;
         showStack();
   }
   function mulOp() {
         X = Y*X; Y = Z; Z = T;
         showStack();
   }
