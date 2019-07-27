// JavaScript Document
//functions to update values//
    function tickP1() {
      document.getElementById("p1Count").innerHTML = g1p1Counter;
    };
    function fillP1() {
      document.getElementById("p1Fill").style.width = g1p1Progress + '%';
    };
    function tickP2() {
      document.getElementById("p2Count").innerHTML = g1p2Counter;
    };
    function fillP2() {
      document.getElementById("p2Fill").style.width = g1p2Progress + '%';
    };   
    function moveP1() {
      g1p1Progress = g1p1Progress + (amount/full*100);
      if (g1p1Progress == 100 ) {
        g1p1Counter++;
      };
      if (g1p1Progress > 100) {
        g1p1Progress = g1p1Progress-100;
      }; 
    };
    function moveP2() {
      g1p2Progress = g1p2Progress + (amount/full*100);
      if (g1p2Progress == 100) {
        g1p2Counter++;
      };
      if (g1p2Progress > 100) {
        g1p2Progress=g1p2Progress-100; 
      }; 
    };
//only pull new values on interval to reduce traffic(1/sec by default)//
    setInterval ( function update() {
      tickP1();
      tickP2();
      fillP1();
      fillP2();
    },1000);