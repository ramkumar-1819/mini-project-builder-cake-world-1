/*Fill your code */
var price={       //Hold the price of each cakes
    Chocolate:300,
    Strabery:100,
    Vannila:200,
    ButterScotch:250,
    RedValvet:350
}
var layer=0;   //used to find place candle based on layer && visible cake size based the layers
var list=[];   //hold selected cakes
var total=0;   //hold total cost of selected cakes
function fun(x){  //onclick on specific cake in the menu
    x.classList.toggle("clicked"); //used this class to pop up the cake that you selected
    if((x.innerHTML)==="Chocolate"){
        list.push("Chocolate")
        document.querySelector(".Chocolate").innerHTML="Chocolate ------ 300";
        layer+=1
        builtlayers(layer,list[list.length-1])//this function build cake size based on layer and visible cake with color
    }
    else if((x.innerHTML)==="Strabery"){
        list.push("Strabery")
        document.querySelector(".Strabery").innerHTML="Strabery ------- 100";
        layer+=1
        builtlayers(layer,list[list.length-1])
    }
    else if((x.innerHTML)==="Vannila"){
        list.push("Vannila")
        document.querySelector(".Vannila").innerHTML="Vannila -------- 250";
        layer+=1
        builtlayers(layer,list[list.length-1])
    }
    else if((x.innerHTML)==="ButterScotch"){
        list.push("ButterScotch")
        document.querySelector(".ButterScotch").innerHTML="ButterScotch --- 200";
        layer+=1
        builtlayers(layer,list[list.length-1])
    }
    else if((x.innerHTML)==="RedValvet"){
        list.push("RedValvet")
        document.querySelector(".RedValvet").innerHTML="Red Valvet ----- 350";
        layer+=1
        builtlayers(layer,list[list.length-1])
    }
}
document.querySelector(".Buy").onclick=function(){//this function used to pop up the total and candle when onclicking
   list.forEach(value=>{
         total+=price[value]//calculating total
   })
   let $total=document.querySelector(".total")
   $total.innerHTML="Total -------- "+total;
   $total.style.margin="3px 5px";
   var $candle=document.getElementById("candle");
   //position the candle based on layer after clicking buy button
   if(layer===1){
   $candle.style.display="block";
   $candle.style.position="relative";
   $candle.style.top="175px";
   }
   if(layer===2){
    $candle.style.display="block";
    $candle.style.position="relative";
    $candle.style.top="135px";
   }
   if(layer===3){
    $candle.style.display="block";
    $candle.style.position="relative";
    $candle.style.top="95px";
   }
   if(layer===4){
    $candle.style.display="block";
    $candle.style.position="relative";
    $candle.style.top="55px";
   }
   if(layer===5){
    $candle.style.display="block";
    $candle.style.position="relative";
    $candle.style.top="15px";
   }
}
//visible the cake size based on the layer
builtlayers=(layer,name)=>{
    if(layer==1){
        document.querySelector("#layer1").style.visibility="visible";
        findColors(name,document.querySelector("#layer1"))
    }
    if(layer==2){
        document.querySelector("#layer2").style.visibility="visible";
        findColors(name,document.querySelector("#layer2"))
    }
    if(layer==3){
        document.querySelector("#layer3").style.visibility="visible";
        findColors(name,document.querySelector("#layer3"))
    }
    if(layer==4){
        document.querySelector("#layer4").style.visibility="visible";
        findColors(name,document.querySelector("#layer4"))
    }
    if(layer==5){
        document.querySelector("#layer5").style.visibility="visible";
        findColors(name,document.querySelector("#layer5"))
    }

}
//giving color to cake based on values and passing 
findColors=(value,ids)=>{
    if(value=="Chocolate"){
        ids.style.backgroundColor="orange";
    }
    if(value=="Vannila"){
        ids.style.backgroundColor="white";
    }
    if(value=="Strabery"){
        ids.style.backgroundColor="pink";
    }
    if(value=="ButterScotch"){
        ids.style.backgroundColor="yellow";
    }
    if(value=="RedValvet"){
        ids.style.backgroundColor="red";
    }

}