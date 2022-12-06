const name = document.getElementById(`name`);
const price = document.getElementById(`price`);
const howmany = document.getElementById(`howmany`);
let tbody= document.querySelector(`tbody`);
let i=1
function addProduct(){
   if(name.value ==''|| price.value==''|| howmany.value==''||price.value<=0|| howmany.value<=0){
    alert(`inputlarni to'ldiring yokr 0dan katta qiymat kiriting`)
   }else{
let td1 = document.createElement(`td`);
let td2 =document.createElement(`td`);
let td3 = document.createElement(`td`);
let td4 = document.createElement(`td`);
let td5 = document.createElement(`td`);
td5.setAttribute(`class`, `res`)
let td6 = document.createElement(`td`);
td6.setAttribute(`class`,`del`)
let tr = document.createElement(`tr`);
tr.setAttribute(`class`,`tr`);

td1.innerHTML = i;
td2.innerHTML = name.value;
td3.innerHTML=price.value;
td4.innerHTML= howmany.value;
td5.innerHTML=price.value*howmany.value;
td6.innerHTML= 'delete';
tr.append(td1,td2,td3,td4,td5,td6)
tbody.append(tr);
i++
deleteTable()
summa()
name.value = '';
price.value =''
howmany.value=''

   }
}

function deleteTable(){
let del=document.querySelectorAll(`.del`)
let deltr = document.querySelectorAll(`.tr`)
for (let k=0; k<del.length; k++){
    del[k].addEventListener(`click`,function(){
        deltr[k].remove()
        summa()
    })

  
    }
  
}
function summa(){
    let strong = document.querySelector(`strong`);
    let res = document.querySelectorAll(`.res`);
    let result = 0
    for (let sum of res){
result += +sum.innerHTML;
    }
    strong.innerHTML = result;
}
