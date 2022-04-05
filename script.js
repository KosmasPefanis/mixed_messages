
let goodMorningArray=["Good morning.","bonjour.","buenos días.","guten Morgen.","buongiorno.","bom dia.","suprabhat.","zǎoān."];
let niceMeetArray=["Ce fut un plaisir de vous rencontrer.","Fue un placer conocerte.","Es war mit ein Vergnügen Sie kennen zu lernen.","È stato un piacere conoscerti.","Foi um prazer conhece-lo.","aapase mil kar khushee huee.","Hěn gāoxìng jiàn dào nǐ."];
let goodDayArray=["Passe une bonne journée!","Que tenga un buen día!","Haben Sie einen guten Tag!","Buona giornata!","Tenha um bom dia!","aapaka din shubh ho!","Zhù nǐ yǒu měihǎo de yītiān!"];



function pickRandomNumber(ceil){
    return Math.floor(Math.random()*ceil);
}

function pickRandomPhrase(array){
    let index = pickRandomNumber(array.length);
    return array[index];
}

function createMessage(array1,array2,array3){
    let phrase=[];
    phrase.push(pickRandomPhrase(array1));
    phrase.push(pickRandomPhrase(array2));
    phrase.push(pickRandomPhrase(array3));
    return phrase.join(" ")
}

console.log(createMessage(goodMorningArray,niceMeetArray,goodDayArray));