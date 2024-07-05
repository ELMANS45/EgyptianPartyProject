/// <reference types="../node_modules/@types/jquery"/>


function timeR(){
let dateFuture = new Date(new Date().getFullYear() +6, 0, 1);
let dateNow = new Date();
console.log(dateNow);
let seconds = Math.floor((dateFuture - (dateNow))/1000);
let minutes = Math.floor(seconds/60);
let hours = Math.floor(minutes/60);
let days = Math.floor(hours/24);

hours = hours-(days*24);
minutes = minutes-(days*24*60)-(hours*60);
seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
document.getElementById("days").innerHTML=days + "d" ; 
document.getElementById("hours").innerHTML=hours +"h" ; 
document.getElementById("minutes").innerHTML=minutes + "m"; 
document.getElementById("seconds").innerHTML=seconds +"s" ; 
}
function setd(){
    timeR();
    window.setInterval("timeR()",1)
}
setd()
var e= document.getElementById("ent")
e.addEventListener('input',function(){
    let a=0;
        a=(100-(e.value.length));
        if(a>=0){
            document.getElementById("chars").innerHTML=a
        }
        else{
            document.getElementById("chars").innerHTML='your available character finished'
        }
    
})
$('.openNav').on('click',function(){
    $('#leftMenu').animate({width : "250px"} , 300)
    $('#home-content').animate({marginLeft:"250px"},300);
})
$('.closebtn').on('click' , function(){
    $('#leftMenu').animate({width : "0"} , 300)
    $('#home-content').animate({marginLeft:"0"},300);
})
$('sidenav a[href^="#"]').on('click',function(){
    let href = $(this).attr('href')
    let section=$(href).offset().top
    $('html').animate({scrollTop : section},1000)
})
$('.rank h3').on('click',function(){
    let kara =$('.rank').siblings().find('.act')
    if($(this).next().attr('class')=='inner act'){
        $($(this).next()).removeClass("act")
        $($(this).next()).slideUp(1000 ,function(){
            $($(this).next()).addClass("d-none")
        })
    }
    else if($(this).next().attr('class')=='inner'){
        let inner = $(this).next()
        $(inner).addClass("act")
        $(inner).removeClass("d-none")
        $(inner).slideDown(1000)
    }
    else{
        $(kara).removeClass("act")
        $(kara).slideUp(1000 ,function(){
            $(kara).addClass("d-none")
        })
        let inner = $(this).next()
        $(inner).addClass("act")
        $(inner).removeClass("d-none")
        $(inner).slideDown(1000)
    }
})