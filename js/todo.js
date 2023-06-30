var i=0;
let j=0;
var k;
var t;
var array=[];
var values;
function newtask(){
    addtoArray();
    print();
}
function addtoArray(){
    var newtask=prompt("Enter a task name");
    values={};
    values.name=newtask;
    values.id=i;
    values.status=false;
    array.push(values);
}
function print(){
    for(var a=0;a<=i;a++){
        if(array[i].status==false  && a==i){
        var create=document.createElement('div');
        var division =document.createElement('div');
        division.style.display="flex";
        division.style.alignItems="center";
        var adiv=document.createElement('div');
        adiv.id="di";
        var button=document.createElement("input");
        button.setAttribute("type","checkbox");
        button.className="checkbox-round";
        button.style.height="12px";
        button.style.width="12px";
        adiv.appendChild(button);
        var div=document.createElement('div');
        div.id="div";
        create.appendChild(division);
        var text=document.createElement('p');
        text.id="text";
        adiv.appendChild(text);
        div.appendChild(adiv);
        div.appendChild(text);
        create.appendChild(adiv);
        create.appendChild(div);
        division.appendChild(adiv);
        division.appendChild(div);
        create.style.background="white";
        text.innerHTML=values.name;
        var hr = document.createElement('hr');
        hr.style.border="1px solid rgb(243, 242, 241)";
        hr.style.height="10px";
        hr.style.background="rgb(243, 242, 241)";
        create.appendChild(hr);
        add.appendChild(create);
        }
    }
    button.onclick=function () {
        var completedArray=[];
        for(let b=0;b<array.length;b++){
            if(array[b].name===text.innerText){
                array[b].status=!array[b].status;
                console.log(array[b].status);
                if(array[b].status===true || array[b].status===false){
                    completedArray.push(array[b]);
                    console.log(completedArray);
                    // break;
                }
            }
        }
        for( const obj of completedArray){
            if(obj.status===true){
                var complete=document.createElement('div');
                if(j==0){
                    t=document.createTextNode(" Completed ");
                    complete.appendChild(t);
                }
                complete.appendChild(create);
                text.style.textDecoration="line-through";
                completed.appendChild(complete);
                j++;
            }
            else{
                text.style.textDecoration="none";
                add.appendChild(create);
            }
        }
    }
    i++;
}