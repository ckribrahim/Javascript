export const nSortASC = (arr) =>{
    return arr.sort((a, b) => a-b );
}


export const nSortDESC = (arr) =>{
    return arr.sort((a, b) => b-a );
}

export const stringSortASC = (arr) =>{
    return arr.sort((a, b) => a.localeCompare(b));
    
}


export const stringSortDESC = (arr) =>{
    return arr.sort((a, b) => b.localeCompare(a));
    
}