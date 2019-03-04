let alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var textArr;

function cipher(){
var textArr = "".split("") // Write the plaintext to cipher between quotes, don't change split method.
var shift = 3 // Set to Caesar's cipher, change the number to change shifting value.  
for(let k=0; k<textArr.length; k++){
	
if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase())==-1)){
continue;

}else if(alphabetArr.indexOf(textArr[k].toUpperCase())+shift > 25){
textArr[k]=alphabetArr[alphabetArr.indexOf(textArr[k].toUpperCase())+shift-26];

}else {
textArr[k]=alphabetArr[alphabetArr.indexOf(textArr[k].toUpperCase())+shift];
	}
}console.log(textArr.join().replace(/,/g, '')) // Writes the ciphering output on console
}

	
function decipher(){
var textArr = document.getElementById("textbox").value.split("");
var shift = 3 // Set to Caesar's cipher, change the number to change shifting value.
	for(let k=0; k<textArr.length; k++){
if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase())==-1)){
continue;

}else if(alphabetArr.indexOf(textArr[k].toUpperCase())-shift < 0){
textArr[k]=alphabetArr[alphabetArr.indexOf(textArr[k].toUpperCase())+26-shift];

}else {
textArr[k]=alphabetArr[alphabetArr.indexOf(textArr[k].toUpperCase())-shift];
		}
	}
console.log( textArr.join().replace(/,/g, '') ) // Writes the deciphering output on console
}
