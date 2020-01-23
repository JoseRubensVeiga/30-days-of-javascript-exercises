
// Level 1

let challenge = '30 Days Of JavaScript';
let techs = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let phrase = 'You cannot end a sentence with because because because is a conjunction';
let withSpaces = ` ${challenge} `;

console.log('Full var: ', challenge);


console.log('Var length: ', challenge.length);


console.log('To Upper: ', challenge.toUpperCase());


console.log('To Lower: ', challenge.toLowerCase());


console.log('Only first word: ', challenge.substr(0, 2));


console.log('Without first word: ', challenge.substr(3));


console.log('includes \'String\'?: ', challenge.includes('Script'));


console.log('Split the string: ', challenge.split(''));


console.log('Split the string at space: ', challenge.split(' '));


console.log('Split the string at the comma: ', techs.split(', '));


console.log('Replace JavaScript to Python: ', challenge.replace('JavaScript', 'Python'));


console.log('The character on the position 15: ', challenge[15]);


console.log('The charCode of the character \'J\': ', challenge.charCodeAt(11));


console.log('The index of the first character \'a\': ', challenge.indexOf('a'));


console.log('The index of the last character \'a\': ', challenge.lastIndexOf('a'));


console.log('Fist occurrence of the word \'because\' with indexOf: ', phrase.indexOf('because'));


console.log('Last occurrence of the word \'because\' with lastIndexOf: ', phrase.lastIndexOf('because'));


console.log('Last occurrence of the word \'because\' with search: ', phrase.search('because'));


console.log('Remove the spaces with trim method: ', withSpaces.trim());


console.log('Using the method startsWith(): ', challenge.startsWith('30'));


console.log('Using the method endsWith(): ', challenge.endsWith('JavaScript'));


console.log('Getting all ocurrences of \'a\' with the match() method: ', challenge.match(/a/g));


console.log('Merging \'30 Days of\' and \'JavaScript\'', 'JavaScript'.concat('30 Days Of JavaScript'));


console.log('Using the repeat() mehtod to print the challenge 2 times', challenge.repeat(2));


// Level 2

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another');


console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');


console.log('Check if typeof \'10\' is exactly equal to 10. If not make it exactly equal: ', (typeof '10' === typeof 10) ? true: (typeof '10' === typeof '10'));


(function() {
    const number1 = parseFloat('9.8');
    const number2 = 10;
    console.log('parseFloat(\'9.8\') is equal to 10: ', number1 === number2);
    console.log('Math.ceil(parseFloat(\'9.8\')) is equal to 10: ', Math.ceil(number1) === number2);
})();


(function() {
    const word1 = 'python';
    const word2 = 'jargon';
    const wordToVerify = 'on';

    console.log(`words '${word1}' and '${word2}' includes '${wordToVerify}': `, word1.includes(wordToVerify) && word2.includes(wordToVerify));
})();


console.log('A random number between 0 and 100: ', Math.floor(Math.random() * 100 + 1));


console.log('A random number between 50 and 100: ', Math.floor(Math.random() * (100 - 50) + 50));


console.log('A random number between 0 and 255: ', Math.floor(Math.random() * 255));

(function() {
    const string = 'JavaScript';
    const max = string.length - 1;
    const random = Math.floor(Math.random() * max);
    console.log('accessing the random caracter of \'Javascript\' String', string[random]);
})();


console.log('Using the console.log to print a pattern: ', `1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n`)


console.log('Getting only a part of the string: ', phrase.slice(31, 54));


// Level 3

(function(){
    const phrase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

    console.log('Amount of words \'love\' on a phrase: ', phrase.match(/love/gi).length);
})();


console.log('Amount of words \'because\' on a phrase: ', phrase.match(/because/g).length);


(function() {
    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

    const clearedSentence = sentence.replace(/[@%$&#;,.?!]/g, '');
    const sentenceArray = clearedSentence.split(' ');

    const amount = {};

    sentenceArray.forEach(sentence => {
        amount[sentence] = amount[sentence] ? amount[sentence]+1 : 1;
    });

    const maxAmount = Math.max(...Object.values(amount));
    const maxWords = [];
    Object.keys(amount).forEach(key => {
        const value = amount[key];

        if(value === maxAmount) {
            maxWords.push(key);
        }
    });

    console.log('As palavras mais repetidas são: ', maxWords)
})();

(function() {
    const phrase = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
    const numbers = phrase.split(' ').filter(Number);

    const monthSalary = parseFloat(numbers[0]);
    const annualBonus = parseFloat(numbers[1]);
    const coursesMonth = parseFloat(numbers[2]);

    const annualIncome = monthSalary * 12 + annualBonus + coursesMonth * 12;

    console.log("the annual income is: ", annualIncome);

})();
// Calculate the total annual income of the person by extract the numbers from the following text. 