function getElementWidth(content, padding, border){
    return parseFloat(content.slice(0,-2)) + (2 * parseFloat(padding.slice(0,-2))) +(2 * parseFloat(border.slice(0,-2)));
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
