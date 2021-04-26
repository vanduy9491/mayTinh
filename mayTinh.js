function click(){
    let click1 = document.getElementsByClassName('btn').value;
    let input =  document.getElementById('Result').value;
    if (click1 != 'c'){
        input += click1;
    }
}
