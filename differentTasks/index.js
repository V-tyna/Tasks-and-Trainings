// Rremove all "0" and "-" from number

function removeZeroAndDash(num) {
    const str = num.toString();
    let finalStr = '';
    for(let letter of str) {
        if(letter !== "-" && letter != 0) {
            finalStr += letter;
        }
    }
    console.log(+finalStr);
    return +finalStr;
}

removeZeroAndDash(-909010090);

