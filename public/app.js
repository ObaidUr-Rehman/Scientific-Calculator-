var screenData= document.getElementById("screen");

function getvalue(val){
    var value=val;
    display(val);

}

function display(v) {
    if (v === "=") {
        let data=screenData.value;
        let total = eval(data) // 1 + 1
        screenData.value = total;
    }
    else{
        screenData.value += v;
    }
}

function clearval() {
        screenData.value="";
    
}

function remove() {

    var rev = screenData.value;
    screenData.value = rev.substring(0, rev.length - 1);

}
function Sint(){
    let a=screenData.value;
    let b=Math.sin(a);
    screenData.value=b;
}
function Cost(){
    let c=screenData.value;
    let d=Math.cos(c);
    screenData.value=d;
}
function Tant(){
    let e=screenData.value;
    let f=Math.tan(e);
    screenData.value=f;
}
function sqrt(){
    let g=screenData.value;
    let h=Math.sqrt(g);
    screenData.value=h;
}
function pow(){
    let i=screenData.value;
    let j=Math.pow(i,2);
    screenData.value=j;
}
function log(){
    let k=screenData.value;
    let l=Math.log(k);
    screenData.value=l;
}
function pi(){
    screenData.value=3.14159265359;
}
function exponent(){
    let k=screenData.value;
    let l=Math.exp(k);
    screenData.value=l;
}
function pow2(){
    let q=screenData.value;
    let r=Math.pow(q,3);
    screenData.value=r;
}
function factorial(){
   var y, num, z;
   z=1;
   num=screenData.value;
   for(y=1; y<=num; y++)
   {
    z=z*y;
   }
   y=y-1;
   screenData.value=z;
}
function inverse(){
    var s,t;
    s=screenData.value;
    t=1/s;
    screenData.value=t;
}

