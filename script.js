let btn = document.getElementById('btnID');

btn.addEventListener('click', (e) => {
  
    let div = document.createElement("div");
    div.id = "div_id" ;
    div.className = "div_class";
    div.style = "background-color: red;";
    div.style.width = "100px";
    div.style.height = "100px";
    document.body.appendChild(div);  
  
});