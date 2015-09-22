$(document).ready(function() {
                  circle();
                  function circle() {
                  $("#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8").animate({left: "+=200px",top: "-=275px"}, 500);
                  $("#c11,#c12,#c13,#c14,#c15,#c16,#c17,#c18").animate({left: "-=200px",top: "+=275px"}, 500);
                  
                  $("#c1").animate({left: "-=87.5px", top: "+=87.5"}, 500);
                  $("#c2").animate({left: "-=75px", top: "+=87.5"}, 600);
                  $("#c3").animate({left: "-=62.5px", top: "+=87.5"}, 700);
                  $("#c4").animate({left: "-=50px", top: "+=87.5"}, 800);
                  $("#c5").animate({left: "-=37.5px", top: "+=87.5"}, 1200);
                  $("#c6").animate({left: "-=25px", top: "+=87.5"}, 1000);
                  $("#c7").animate({left: "-=12.5px", top: "+=87.5"}, 1100);
                  $("#c8").animate({left: "-=0px", top: "+=87.5"}, 1200);
                  $("#c11").animate({left: "+=87.5px", top: "+=87.5"}, 500);
                  $("#c12").animate({left: "+=75px", top: "+=87.5"}, 500);
                  $("#c13").animate({left: "+=62.5px", top: "+=87.5"}, 500);
                  $("#c14").animate({left: "+=50px", top: "+=87.5"}, 500);
                  $("#c15").animate({left: "+=37.5px", top: "+=87.5"}, 500);
                  $("#c16").animate({left: "+=25px", top: "+=87.5"}, 500);
                  $("#c17").animate({left: "+=12.5px", top: "+=87.5"}, 500);
                  $("#c18").animate({left: "+=0px", top: "+=87.5"}, 500);
                  
                  $("#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8").animate({left: "-=400px"}, 500);
                  $("#c11,#c12,#c13,#c14,#c15,#c16,#c17,#c18").animate({left: "+=400px"}, 500);
                  
                  $("#c1").animate({left: "-=87.5px"}, 2700);
                  $("#c2").animate({left: "-=75px"}, 2600);
                  $("#c3").animate({left: "-=62.5px"}, 2500);
                  $("#c4").animate({left: "-=50px"}, 2400);
                  $("#c5").animate({left: "-=37.5px"}, 2300);
                  $("#c6").animate({left: "-=25px"}, 2200);
                  $("#c7").animate({left: "-=12.5px"}, 2100);
                  $("#c8").animate({left: "-=0px"}, 2000);
                  $("#c11").animate({left: "+=87.5px"}, 1700);
                  $("#c12").animate({left: "+=75px"}, 1600);
                  $("#c13").animate({left: "+=62.5px"}, 500);
                  $("#c14").animate({left: "+=50px"}, 1400);
                  $("#c15").animate({left: "+=37.5px"}, 1300);
                  $("#c16").animate({left: "+=25px"}, 1200);
                  $("#c17").animate({left: "+=12.5px"}, 1100);
                  $("#c18").animate({left: "+=0px"}, 1000);
                  
                  $("#c1").animate({left: "+=175px", top: "-=87.5"}, 500);
                  $("#c2").animate({left: "+=150px", top: "-=87.5"}, 500);
                  $("#c3").animate({left: "+=125px", top: "-=87.5"}, 500);
                  $("#c4").animate({left: "+=100px", top: "-=87.5"}, 500);
                  $("#c5").animate({left: "+=75px", top: "-=87.5"}, 200);
                  $("#c6").animate({left: "+=50px", top: "-=87.5"}, 500);
                  $("#c7").animate({left: "+=25px", top: "-=87.5"}, 500);
                  $("#c8").animate({left: "+=0px", top: "-=87.5"}, 500);
                  $("#c11").animate({left: "-=175px", top: "-=87.5"}, 2500);
                  $("#c12").animate({left: "-=150px", top: "-=87.5"}, 2600);
                  $("#c13").animate({left: "-=125px", top: "-=87.5"}, 3700);
                  $("#c14").animate({left: "-=100px", top: "-=87.5"}, 2800);
                  $("#c15").animate({left: "-=75px", top: "-=87.5"}, 2900);
                  $("#c16").animate({left: "-=50px", top: "-=87.5"}, 3000);
                  $("#c17").animate({left: "-=25px", top: "-=87.5"}, 3100);
                  $("#c18").animate({left: "-=0px", top: "-=87.5"}, 3200);
                  
                  $("#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8").animate({left: "+=200px", top: "+=275"}, 2500);
                  $("#c11,#c12,#c13,#c14,#c15,#c16,#c17,#c18").animate({left: "-=200px", top: "-=275"}, 1500, circle);
                  }
});