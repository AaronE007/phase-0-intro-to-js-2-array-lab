const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
} 

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
} 

function destructivelyRemoveLastCat() {
    cats.pop(1);
} 

function destructivelyRemoveFirstCat() {
    cats.shift(1);
} 

const allCats = [...cats, "Broom"];

function appendCat(name) {
    return allCats;
}

const someCats = ["Arnold", ...cats];

function prependCat(name) {
    return someCats;
}

const copyOfCats = cats.slice(1);

function removeFirstCat() {
    return copyOfCats 
}

const copiesOfCats = cats.slice(0,-1);

function removeLastCat() {
    return copiesOfCats 
}