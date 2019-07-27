// JavaScript Document
//functions to update values//
    function tickP1() {
      document.getElementById("p1Count").innerHTML = g4p1Counter;
    };
    function fillP1() {
      document.getElementById("p1Fill").style.width = g4p1Progress + '%';
    };
    function tickP2() {
      document.getElementById("p2Count").innerHTML = g4p2Counter;
    };
    function fillP2() {
      document.getElementById("p2Fill").style.width = g4p2Progress + '%';
    };   
    function moveP1() {
      g4p1Progress = g4p1Progress + (amount/full*100);
      if (g4p1Progress == 100 ) {
        g4p1Counter++;
      };
      if (g4p1Progress > 100) {
        g4p1Progress = g4p1Progress-100;
      }; 
    };
    function moveP2() {
      g4p2Progress = g4p2Progress + (amount/full*100);
      if (g4p2Progress == 100) {
        g4p2Counter++;
      };
      if (g4p2Progress > 100) {
        g4p2Progress=g4p2Progress-100; 
      }; 
    };
//only pull new values on interval to reduce traffic(1/sec by default)//
    setInterval ( function update() {
      tickP1();
      tickP2();
      fillP1();
      fillP2();
    },1000);