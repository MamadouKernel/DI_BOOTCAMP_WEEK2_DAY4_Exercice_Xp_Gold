/**
 * @author : Konate Mamadou
 */

/* ******************* Exercice 1 ***************** */

function isBlank(character){

    /**
     * @description : cette fonction permet vérifier si'il y a des options
     */

    if(character.toString().length == "") {

        return false;

    }
    return true;
}

isBlank('');

/* ***************** End Exercice 1 ************** */

/* *************** Exercice 2 ******************* */

function abbrevName(character) {

    /**
     * @description : cette fonction fais les abbréviations d'une chaine de caractère
     * @param : character -> la chaine qu'on veut abbréger
     * @param : abbrevTab -> représente la liste des mots contenus dans notre chaine
     * @returns;
     */

    let abbrevTab = character.toString().split(" ");

    if(abbrevTab.length > 1) {

        return `${abbrevTab[0]} ${abbrevTab[1].charAt(0)}.`;

    }

    return character;
}

abbrevName("Robin Singh");

/* ***************** End Exercice 2 **************** */

/* *************** Exercice 3 ************** */

function swapCase(character) {

    /**
     * @description : cette fonction permet de remplacer toutes les majuscules par des 
     * miniscules et vice verca
     * @param  : character -> chaine sur laquelle on travail
     * @param : wordTable -> tableau qui contient les mots de notre chaine
     * @param : neWordTableFormated -> tableau contenant les mots reformatter
     */

    let wordTable = character.split(" ");
    let neWordTableFormated = [];

    for(let word of wordTable) {
        if(word.charAt(0) == word.charAt(0).toUpperCase()) {

            word = word.charAt(0).toLowerCase() + word.substring(1).toUpperCase();
            neWordTableFormated.push(word);

        }
        else {

            word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
            neWordTableFormated.push(word);

        }
    }

    console.log(neWordTableFormated.join(" "));

}

/* ************** End Exercice 3 ***************** */

/* ************** Exercice 4 ***************** */

function isOmnipresent(array, number) {

    /**
     * @description : cette fonction permet de vérifier si un chiffre est présente
     * dans un tableau composé de sous tableau
     * @param : array -> tableau de sous tableau
     * @param : number -> nombre à vérifier dans le tableau
     * @param : found -> le nombre de fois ou on trouve le nombre dans le tableau
     */
    
    let found = 0;

    for(let item of array) {
        
        for(let i of item) {
            
            if(i == number) {
                found++;
            }
        }
    }

    if(found >= array.length) {
        return true;
    }
    return false;

}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);

/* **************** End Exercice 4 **************** *//**
 * @author : ezekiel kouassi
 */

/* ******************* Exercice 1 ***************** */

function isBlank(character){

    /**
     * @description : cette fonction permet vérifier si'il y a des options
     */

    if(character.toString().length == "") {

        return false;

    }
    return true;
}

isBlank('');

/* ***************** End Exercice 1 ************** */

/* *************** Exercice 2 ******************* */

function abbrevName(character) {

    /**
     * @description : cette fonction fais les abbréviations d'une chaine de caractère
     * @param : character -> la chaine qu'on veut abbréger
     * @param : abbrevTab -> représente la liste des mots contenus dans notre chaine
     * @returns;
     */

    let abbrevTab = character.toString().split(" ");

    if(abbrevTab.length > 1) {

        return `${abbrevTab[0]} ${abbrevTab[1].charAt(0)}.`;

    }

    return character;
}

abbrevName("Robin Singh");

/* ***************** End Exercice 2 **************** */

/* *************** Exercice 3 ************** */

function swapCase(character) {

    /**
     * @description : cette fonction permet de remplacer toutes les majuscules par des 
     * miniscules et vice verca
     * @param  : character -> chaine sur laquelle on travail
     * @param : wordTable -> tableau qui contient les mots de notre chaine
     * @param : neWordTableFormated -> tableau contenant les mots reformatter
     */

    let wordTable = character.split(" ");
    let neWordTableFormated = [];

    for(let word of wordTable) {
        if(word.charAt(0) == word.charAt(0).toUpperCase()) {

            word = word.charAt(0).toLowerCase() + word.substring(1).toUpperCase();
            neWordTableFormated.push(word);

        }
        else {

            word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
            neWordTableFormated.push(word);

        }
    }

    console.log(neWordTableFormated.join(" "));

}

/* ************** End Exercice 3 ***************** */

/* ************** Exercice 4 ***************** */

function isOmnipresent(array, number) {

    /**
     * @description : cette fonction permet de vérifier si un chiffre est présente
     * dans un tableau composé de sous tableau
     * @param : array -> tableau de sous tableau
     * @param : number -> nombre à vérifier dans le tableau
     * @param : found -> le nombre de fois ou on trouve le nombre dans le tableau
     */
    
    let found = 0;

    for(let item of array) {
        
        for(let i of item) {
            
            if(i == number) {
                found++;
            }
        }
    }

    if(found >= array.length) {
        return true;
    }
    return false;

}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);

/* **************** End Exercice 4 **************** */