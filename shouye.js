
var intro = document.querySelector(".img_title_1");
var intro1 = document.querySelector(".img_title_2");
var intro2 = document.querySelector(".mid_content_left_img");
var intro3 = document.querySelector(".contant_jieshao");
var intro4_1 = document.querySelector(".mid2_kuai1");
var intro4_2 = document.querySelector(".mid2_kuai2");
var intro3_1 = document.querySelector(".mid3_top2");
var intro3_2 = document.querySelector(".mid3_top1");
var intro3_3 = document.querySelector(".mid3_mid");
var intro3_bottom = document.querySelector(".mid3_bottom");
var intro_mid4 = document.querySelector(".mid4");

var speed1=500/280;
var speed4_1=300/300;
var speed4_2=300/300;
var speed3_1=500/580;
var speedmid4=90/1015;
// 1840-2420
window.onscroll=function(){
var top=this.document.documentElement.scrollTop;
console.log(top);
// ---------------------banner------------------------------


// ---------------------mid4------------------------------
if(top>2445 && top<3460){
   
    var dismid4=-90+(top-2445)*speedmid4;
   intro_mid4.style.transform="rotateY("+dismid4+"deg)";
   
}
else if(top>3460)
{
    intro_mid4.style.transform="rotateY(0deg)";
   
}


// -------------------mid3--------------------------------
if(top>1840 && top<2420){
    var dis3_1=500-(top-1840)*speed3_1;
    var dis3_3=-500+(top-1840)*speed3_1;
   intro3_1.style.transform="translateX("+dis3_1+"px)";
   intro3_2.style.transform="translateX("+dis3_1+"px)";
   intro3_3.style.transform="translateX("+dis3_3+"px)";
   intro3_bottom.style.transform="translateX("+dis3_3+"px)";
   intromid4.style.transform="translateX("+dis4_1+"px)";
}
else if(top>2420)
{
    intro3_1.style.transform="translateX(0)";
    intro3_2.style.transform="translateX(0)";
    intro3_3.style.transform="translateX(0)";
    intro3_bottom.style.transform="translateX(0)";
}
// ---------------------------------------------------
if(top>300 && top<580){
    var dis=500-(top-300)*speed1;
    var disintro2=-500+(top-300)*speed1;
    intro.style.transform="translateX("+dis+"px)";
    intro1.style.transform="translateX("+dis+"px)";
    intro2.style.transform="translateX("+disintro2+"px)";
    intro3.style.transform="translateX("+dis+"px)";
}
else if(top>580)
{
    intro.style.transform="translateX(0)";
    intro1.style.transform="translateX(0)";
    intro1.style.transform="translateX(0)";
    intro3.style.transform="translateX(0)";
}

// -------------------------------------------------
if(top>900 && top<1200){
    var dis4_1=300-(top-900)*speed4_1;
    var dis4_2=-300+(top-900)*speed4_1;
    intro4_1.style.transform="translateX("+dis4_1+"px)";
    intro4_2.style.transform="translateX("+dis4_2+"px)";
}
else if(top>1400)
{
    intro4_1.style.transform="translateX(-300px)";
    intro4_2.style.transform="translateX(0px)";
}





    }
// // ----------定位滚轮-----------
//     window.onload=function(){
//         setTimeout(function(){
//             window.scrollTo(0,0);
//         },20);
// }


