const zahl_1 = +(prompt("Geben Sie bitte eine Zahl ein!"))

const zahl_2 = +(prompt("Geben Sie bitte eine weitere Zahl ein!"))

const zahl_3 = +(prompt("Geben Sie bitte dritte Zahl ein!"))


var amGrößtenZahl = 0;

var amkleinstenZahl;

if (zahl_1>zahl_2 && zahl_1>zahl_3) {
    amGrößtenZahl = zahl_1 
}else if(zahl_2>zahl_1 && zahl_2>zahl_3){
    amGrößtenZahl= zahl_2
}else if(zahl_3>zahl_1 && zahl_3>zahl_2 ){
    amGrößtenZahl = zahl_3
}if (zahl_1<zahl_2 && zahl_1<zahl_3){
    amkleinstenZahl=zahl_1
}if(zahl_2<zahl_1 && zahl_2<zahl_3){
    amkleinstenZahl=zahl_2
}if (zahl_3<zahl_1 && zahl_3<zahl_2){
    amkleinstenZahl =zahl_3
}


console.log("amGrö0tenZahl: ", amGrößtenZahl);

console.log("amkleinstenZahl:", amkleinstenZahl);
