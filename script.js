let inputtag =document.querySelector("#inputTag");
let btn=document.querySelector("#bt");
let list=document.querySelector("#list");


btn.addEventListener("click",function(){
// console.log(inputtag.value);
let inputtext =inputtag.value;
inputtag.value="";
if(inputtext !=""){
let litag =document.createElement("li");
litag.innerHTML=inputtext+'<svg widht="20px" height="20px" class="dicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>'
let deleteicon =litag.querySelector(".dicon")

deleteicon.addEventListener("click",function(){

    list.removeChild(litag);
})
list.appendChild(litag);
}else{
    alert("pls weite something in input")
}
}
)
