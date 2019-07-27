// JavaScript Document
//functions to update values//
    function tickP1() {
      document.getElementById("p1Count").innerHTML = g5p1Counter;
    };
    function fillP1() {
      document.getElementById("p1Fill").style.width = g5p1Progress + '%';
    };
    function tickP2() {
      document.getElementById("p2Count").innerHTML = g5p2Counter;
    };
    function fillP2() {
      document.getElementById("p2Fill").style.width = g5p2Progress + '%';
    };   
    function moveP1() {
      g5p1Progress = g5p1Progress + (amount/full*100);
      if (g5p1Progress == 100 ) {
        g5p1Counter++;
      };
      if (g5p1Progress > 100) {
        g5p1Progress = g5p1Progress-100;
      }; 
    };
    function moveP2() {
      g5p2Progress = g5p2Progress + (amount/full*100);
      if (g5p2Progress == 100) {
        g5p2Counter++;
      };
      if (g5p2Progress > 100) {
        g5p2Progress=g5p2Progress-100; 
      }; 
    };
//only pull new values on interval to reduce traffic(1/sec by default)//
    setInterval ( function update() {
      tickP1();
      tickP2();
      fillP1();
      fillP2();
    },1000);