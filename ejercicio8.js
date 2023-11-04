function reemplazarAmpersand(inputField) {
    inputField.addEventListener('blur', function() {
        inputField.value = inputField.value.replace(/&/g, 'and');
    });
}
let foco=document.getElementsByTagName("input");
for(let i=0;i<foco.length;i++){
    if (foco[i].type=="text"){
        reemplazarAmpersand(foco[i]);
        }
}
