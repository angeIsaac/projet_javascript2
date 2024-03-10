// fonction qui recherche le plus grand nombre d'un tableau 
function max(tab){
    let max = 0;
    for(let i of tab){
        if (max < i){
            max = i;
        }
    }
    return `le plus grand est ${max}`;
}
console.log(max([1, 6, 9, 34, 9, 0]));

// fonction qui permet de rechercher le petit element d'un tableau
const min = tab =>{
    let minn = tab[0];
    for(let i of tab){
        if (minn > i){
            minn = i;
        }
    }
    return `le plus petit nombre est ${minn}`;
}
console.log(min([1, 3, 89, 90, 12]));

// fonction qui calcule la somme de tous les element d'un tableau
function somme(tab){
    let somm = 0;
    for(let i of tab){
        somm += i;
    }
    return `la somme des elements du tzbleau est: ${somm}`;
}
console.log(somme([1, 2, 3, 4, 5]));