function chaineReverse(char){
    /*fonction qui permet d'inverser une chaine de caractere */
    let tab = char.split("");
    let tabReverse = tab.reverse();
    let charReverse = ""; 
    for(let j of tabReverse){
      charReverse += j;
    }
    return charReverse;
  }

console.log(chaineReverse("bonjour"));


// fonction qui permet de compter le nombre de caractere d'une chaine
let countChar = char => {
  return char.length
}
console.log(countChar("bonjour"))

// fontion qui va mettre tous les lettres d'une phrase en majuscule
function charUpperCase(char){
  let tab = char.split(" ");
  let charMarj = "";
  for(let value of tab){
    charMarj += value[0].toUppercase() + value.slice(1, (value.length)) + " "; 
  }
  return charMarj;
}
console.log(charUpperCase("bonjour je suis isaac etudiant a Gomycode"));