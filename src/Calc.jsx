function add (a, b){
    let sum = a + b; 
    return sum;
}
function sum(a, b){
    let sub = a-b;
    return sub;
    
}
function mult(a, b){
    let mult = a*b;
    return mult;

}
function div(a, b){
    let div = a/b;
    div = div.toFixed(2);
    return div;

}


export {add, sum, mult, div};