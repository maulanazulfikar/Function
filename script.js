//no.1
function tokoOnline(namaPembeli, barangDibeli){
    return `Terima kasih ${namaPembeli} telah membeli ${barangDibeli}`
}
    console.log (tokoOnline("maul", "TV"));


//no.2
function multiplyByNineFifths(number) {
    return number * (9/5)
}
function getFahrenhait(celcius) {
    return multiplyByNineFifths(celcius) + 32
}
console.log (getFahrenhait(15));

function convertFahrenhait(number) {
    return number - 32
}
function getCelcius(fahrenhait) {
    return convertFahrenhait(fahrenhait) / 1.8
}
console.log (getCelcius(15));

//no.3
let usia= 3

    if (usia == 1 ){
    console.log(usia * 15)
    }else if (usia == 2){
    console.log(usia * 12)
    }else if (usia > 2){
    console.log((usia-2) * 4 + 24)
    }

//no.4
const mengubahHuruf = (kalimat) => {return kalimat.toLowerCase();}
console.log (mengubahHuruf("HELLO WORLD"))