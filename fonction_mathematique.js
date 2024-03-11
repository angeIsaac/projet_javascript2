function factoriel(nbre){
    /*la fonction factoriel */
    let i = 1;
    let fact = 1;
    for(; i<= nbre; i++){
        fact *= i;
    }
    return `le factoriel de ${nbre} est ${fact}`;
}
console.log(factoriel(5));

// fonction qui determine si un nombre est premier
function nbrePremier(nbre){
    let i = 2;
    if (nbre === 2){
        return ` ${nbre} est un nombre premier`;
    }
    for(; i < nbre; i++){
        if (nbre % i === 0){
            return `${nbre} n'est pas un nombre premier`;
        }
        else{
            return `${nbre} est un nombre premier`;
        }
    }
}
console.log(nbrePremier(2));

// suit de fibonaci
function fibonaci(nbre){
    let i = 0;
    for(; i<= nbre; i++){
        if (i >= 2){
            console.log((i-1) + (i-2))
        }
        else{
            console.log(i)
        }
    }
}
fibonaci(10);