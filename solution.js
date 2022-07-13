// 1
console.log("-------- Aufgabe 1 -------");

function aufgabe1(text) {
    console.log(text, "1");
    console.log(text, "2");
    console.log(text, "3");
}

aufgabe1("Hello");

// 2
console.log("-------- Aufgabe 2 -------");

function aufgabe2(text) {
    return text.repeat(5);
}

console.log(aufgabe2("Katze"));

// 3
console.log("-------- Aufgabe3 -------");

function aufgabe3(string, nummer) {
    return string.repeat(nummer);
}

console.log(aufgabe3("Woah", 3));

// 4
console.log("-------- Aufgabe 4 -------");

function aufgabe4(arrayOfNumbers) {
    return Math.max(...arrayOfNumbers);
}

console.log(aufgabe4([1, 6, 83, 91, 0, -4, 1337, 5]));

// 5
console.log("-------- Aufgabe 5 -------");

function aufgabe5(zahl) {
    if (zahl % 10 === 0) {
        return `${zahl} even 10!`;
    }
    return `${zahl} no output`;
}

console.log(aufgabe5(1));
console.log(aufgabe5(2));
console.log(aufgabe5(32));
console.log(aufgabe5(10));
console.log(aufgabe5(30));
console.log(aufgabe5(90000));

for (let i = 1; i <= 125; i++) {
    console.log(aufgabe5(i));
}

// 6
console.log("-------- Aufgabe 6 -------");

function aufgabe6(...params) {
    const resultMathMax = Math.max(...params);
    return resultMathMax;
}

console.log(aufgabe6(91, 30, 800, 100, 10));

// 7
console.log("-------- Aufgabe 7 -------");

function aufgabe7(paramToCheck) {
    const isString = typeof paramToCheck === "string";
    return isString;
}

console.log(aufgabe7(89));
console.log(aufgabe7("Deutschland"));

// 8
console.log("-------- Aufgabe 8 -------");

function aufgabe8(paramToCheck1, paramToCheck2) {
    return (
        typeof paramToCheck1 === "string" && typeof paramToCheck2 === "string"
    );
}

console.log(aufgabe8(89, "Hallo"));
console.log(aufgabe8("Deutschland", "Italien"));

// 9
console.log("-------- Aufgabe 9 -------");

function aufgabe9(text) {
    const firstWord = text.split(" ")[0];
    return firstWord;
}

console.log(aufgabe9("Hello world"));

// 10
console.log("-------- Aufgabe 10 -------");

function aufgabe10(text) {
    const textAsArray = text.split(" ");
    const result = [];
    for (let i = 0; i < textAsArray.length; i++) {
        // Lösung 1
        // for (let j = 0; j < textAsArray.length; j++) {
        //     result.push(textAsArray[i]);
        // }
        // Lösung 2
        const wordToRepeat = textAsArray[i] + " ";
        result.push(wordToRepeat.repeat(textAsArray.length));
    }
    return result.join("");
}

console.log(aufgabe10("I am groot"));
console.log(aufgabe10("bunny"));
console.log(aufgabe10("O M G ?"));

// 11
console.log("-------- Aufgabe 11 -------");

function aufgabe11(text) {
    return text[0];
    //return text.substring(0, 1);
    //return text.charAt(0);
}

console.log(aufgabe11("123"));

// 12
console.log("-------- Aufgabe 12 -------");

function aufgabe12(text) {
    const wordsInText = text.split(" ");
    const result = [];

    for (let i = 0; i < wordsInText.length; i++) {
        const currentWord = wordsInText[i];
        result.push(currentWord[0]);
    }

    return result.join("");
}

console.log(aufgabe12("cat"));
console.log(aufgabe12("What the fruit"));
console.log(aufgabe12("MongoDB Express React Node"));
console.log(aufgabe12("What You See Is What You Get"));

// 13
console.log("-------- Aufgabe 13 -------");

function aufgabe13(param) {
    if (typeof param === "string") {
        return param.length;
    }

    if (Array.isArray(param)) {
        return param.length;
    }

    return null;
}

console.log(aufgabe13("Hallo"));
console.log(aufgabe13([2, 3, 4]));
console.log(aufgabe13(43));

// 14
console.log("-------- Aufgabe 14 -------");

function aufgabe14(text) {
    if (typeof text !== "string") {
        return null;
    }

    return text.split("");
}

console.log(aufgabe14("hallo"));
console.log(aufgabe14(3));
