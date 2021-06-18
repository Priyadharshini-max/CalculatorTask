var container = document.createElement("div");
container.setAttribute("class","container");
container.setAttribute("id","outerContainer");
document.body.appendChild(container);

var div = document.createElement("div");
div.setAttribute("class","row");
div.setAttribute("id","firstRow");
container.appendChild(div);

var inp = document.createElement("input");
inp.setAttribute("type","text");
inp.setAttribute("id","calc");
inp.placeholder="0";
inp.autocomplete="off"
inp.setAttribute("onkeypress", "KeyPressCheck(event)");
div.appendChild(inp);

var container2 = document.createElement("div");
container2.setAttribute("class","container");
container2.setAttribute("id","innerContainer");
container.appendChild(container2);


var firstRow=document.createElement("div");
firstRow.setAttribute("class","row");
container2.appendChild(firstRow);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
firstRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","7");
btn.setAttribute("onclick","calculationFn('7')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
firstRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","8");
btn.setAttribute("onclick","calculationFn('8')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
firstRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","9");
btn.setAttribute("onclick","calculationFn('9')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
firstRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","+");
btn.setAttribute("onclick","calculationFn('+')");
Col.appendChild(btn);

var secondRow=document.createElement("div");
secondRow.setAttribute("class","row");
container2.appendChild(secondRow);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
secondRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","4");
btn.setAttribute("onclick","calculationFn('4')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
secondRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","5");
btn.setAttribute("onclick","calculationFn('5')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
secondRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","6");
btn.setAttribute("onclick","calculationFn('6')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
secondRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","-");
btn.setAttribute("onclick","calculationFn('-')");
Col.appendChild(btn);


var thirdRow=document.createElement("div");
thirdRow.setAttribute("class","row");
container2.appendChild(thirdRow);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
thirdRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","1");
btn.setAttribute("onclick","calculationFn('1')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
thirdRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","2");
btn.setAttribute("onclick","calculationFn('2')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
thirdRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","3");
btn.setAttribute("onclick","calculationFn('3')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
thirdRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","*");
btn.setAttribute("onclick","calculationFn('*')");
Col.appendChild(btn);


var fourthRow=document.createElement("div");
fourthRow.setAttribute("class","row");
container2.appendChild(fourthRow);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
fourthRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","0");
btn.setAttribute("onclick","calculationFn('0')");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
fourthRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","=");
btn.setAttribute("onclick","result()");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
fourthRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","AC");
btn.setAttribute("onclick","clearResult()");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
fourthRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","/");
btn.setAttribute("onclick","calculationFn('/')");
Col.appendChild(btn);

var fifthRow=document.createElement("div");
fifthRow.setAttribute("class","row");
container2.appendChild(fifthRow);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
fifthRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","mc");
btn.setAttribute("onclick","clearValue()");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
fifthRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","m+");
btn.setAttribute("onclick","addValue()");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
fifthRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","m-");
btn.setAttribute("onclick","subValue()");
Col.appendChild(btn);

var Col=document.createElement("div");
Col.setAttribute("class","col-xs-1 col-sm-1 col-md-2 col-lg-2");
fifthRow.appendChild(Col);

var btn = document.createElement("input");
btn.setAttribute("type","button");
btn.setAttribute("value","mr");
btn.setAttribute("onclick","getValue()");
Col.appendChild(btn);

//Keyboard Function
function KeyPressCheck(event){
   if(event.charCode < 48 || event.charCode> 57){
    alert("Only numbers are allowed");
    event.preventDefault(); 
  }
 }

 //Get textbox values
 function calculationFn(val){
     document.getElementById("calc").value += val;
 }

 //Add,Sub,Multiply,Division calculation(+,-,/,*)
 function result(){
 try{
    var res = eval(document.getElementById("calc").value);
    document.getElementById("calc").value = res;
   }
 catch(e){
    document.getElementById("calc").value = "Syntax Error";
 }
 }

 //Clear Textbox(AC)
function clearResult(){
    document.getElementById("calc").value = "";
  }

//Set localStorage value
localStorage.setItem("M+ Values",0);

//Add value in localStorage(m+ button)
  function addValue(){
  var sum = parseInt( localStorage.getItem("M+ Values"));
  var a = parseInt(document.getElementById("calc").value); 
  sum = sum + a;
  localStorage.setItem("M+ Values",sum);
 // console.log("sum : " + sum);
}

//Subtract value in localStorage(m- button)
function subValue()
{
var sub=localStorage.getItem("M+ Values");
var b=parseInt(document.getElementById("calc").value);
sub=sub-b;
localStorage.setItem("M+ Values",sub); 
//console.log("sub ",sub); 
}

//Display localStorage value in textbox(mr button)
function getValue(){
  document.getElementById("calc").value=localStorage.getItem("M+ Values");
}

//Clear localStorage(mc button)
function clearValue(){
localStorage.setItem("M+ Values",0);
document.getElementById("calc").value="";
}

