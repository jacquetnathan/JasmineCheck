let selectElementsStartingWithA = (array) => {
    const commenceparA = [];
    array.forEach(element => {
        if (element.startsWith("a")){
            commenceparA.push(element);
        }
    });
    return commenceparA;
}

let selectElementsStartingWithVowel = (array) => {
    

    let voyels = ['a', 'e', 'i', 'o', 'u', 'y']
    const mots = [];
    array.forEach(element => {
        for (let i = 0; i < voyels.length; i++){
        if (element.startsWith(voyels[i])){
            mots.push(element);
        }
    }
    });
    return mots;
}

let removeNullElements = (array) => {
    const sansNull = [];
    array.forEach(element => {
        if (element !== null) {
            sansNull.push(element);
        }
    });
    return sansNull;
}

let removeNullAndFalseElements = (array) => {
    const sansNull2 = [];
    array.forEach(element => {
        if (element !== null && element !== false) {
            sansNull2.push(element);
        }
    });
    return sansNull2;
}

let reverseWordsInArray = (array) => {
    const inverser = [];
    array.forEach(element => {
        inverser.push(element.split("").reverse().join(""));
    })
    return inverser;
}

let everyPossiblePair = (array) => {
    const pairs = [];
    array.sort();
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            pairs.push([array[j], array[i]]);
        }
    }
    return pairs;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3, array.length);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return reverseWordsInArray(reverseWordsInArray(array).sort());
}

let getFirstHalf = (string) => {
    return string.substr(0, Math.round(string.length/2));
}

let makeNegative = (number) => {
    return -Math.abs(number)
}

let numberOfPalindromes = (array) => {
    let count = 0;
    array.forEach(element => {
        const firstHalf = getFirstHalf(element);
        const lastHalf = getFirstHalf(element.split('').reverse().join(''));
        if (firstHalf === lastHalf) count++;
    });
    return count;
}

let shortestWord = (array) => {
    let short = array[0];
    for(let i = 1; i < array.length -1; i++)
    {
        if(short.length > array[i].length){

            short = array[i];
        }

    }
    return short;
}

let longestWord = (array) => {
    let long = array[0];
    for(let i = 1; i < array.length -1; i++)
    {
        if(long.length < array[i].length){

            long = array[i];
        }

    }
    return long;
}

let sumNumbers = (array) => {
    let somme;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    somme = array.reduce(reducer);
    return somme;
}

let repeatElements = (array) => {

    array.forEach(element => {
        array.push(element);
    });
    return array;
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    let moyenne = 0;
    for (let i = 0; i < array.length; i++){
        moyenne = array[i] + moyenne;
    }
    return moyenne / array.length;
    
}

let getElementsUntilGreaterThanFive = (array) => {
    let grandque = [];
    let index = 0;
    while(array[index] < 6){
        grandque.push(array[index]);
        index++;
    }

    return grandque;
}

let convertArrayToObject = (array) => {
    const obj = {};
    for (let i = 0; i < array.length; i = i+2) {
        obj[array[i]] = array[i + 1];
    }
    return obj;
}

let getAllLetters = (array) => {
        let lettre = [];
        array.forEach((element) => {
            for (let i = 0; i < element.length; i++) {
                !lettre.includes(element[i]) && lettre.push(element[i]);
            }
        })

        lettre.sort();
        return lettre;
}

let swapKeysAndValues = (object) => {
    let newObj = {};
    for (let key in object) {
        newObj[object[key]] = key;
    }
    return newObj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    for (let key in object) {
        sum = sum + parseInt(key, 10) + parseInt(object[key], 10);
    }
    return sum;
}

let removeCapitals = (string) => {
    return string.replace(/(\b[A-Z])/g, '');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    const day = date.getDate();
    const month = date.getUTCMonth()+1;
    const years = date.getFullYear();
    return "0"+day + '/' +"0"+month + '/' +years;
}

let getDomainName = (string) => {
    return string.slice(string.indexOf("@") + 1, string.lastIndexOf('.'));
}

let titleize = (string) => {
    const retArray = string.split(' ');
    for (let i = 0; i < retArray.length; i++) {
        if (i === 0 || retArray[i].length > 3 || retArray[i - 1].indexOf('.') > 0) {
            retArray[i] = retArray[i].slice(0, 1).toUpperCase() + retArray[i].slice(1).toLowerCase();
        }
    }
    return retArray.join(' ');
}

let checkForSpecialCharacters = (string) => {
    return string.replace(/[a-zA-Z0-9]/g, '').length > 0;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let facto = 1;
    for (let i = number; i > 1; i--) {
        facto *= i;
    }
    return facto;
}

let findAnagrams = (string) => {
    function getAnagrams(string) {
        if (string.length === 1)
            return string;
        let anagrams = [];
        for (let i = 0; i < string.length; i++) {
            let s = string[0];
            let newA = getAnagrams(string.slice(1, string.length));
            for (let j = 0; j < newA.length; j++)
                anagrams.push(s + newA[j]);
            string = string.slice(1, string.length) + s;
        }
        return anagrams;
    }
    return getAnagrams(string);
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5/9);
}

let letterPosition = (array) => {
    const retArray = [];
    array.forEach(e => {
        retArray.push(e.toLowerCase().charCodeAt(0) - 96);
    });
    return retArray;
}
