// Write a program that accepts two strings as arguments.
// It should check if the one string is at least a partial
// anagram of the other string, i.e.:
// 
// - all the string's characters are included in the other string
// - the string's length does not exceed the length of the other string
// 
// The strings can be of unequal length.
// 
// Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case.

function anagrams(stringA, stringB) {
	// use cleanSortStr to return strings that have been 'standardized' for comparison

	// instead of checking for exact equivalence between 'standardized' strings:
		// identify the shorter of the two strings (if applicable)
			// for each char in the shorter string:
				// if the other string doesn't include the char
					// return false
		// else if strings are of same length
			// for each char in stringA
				// if the other string doesn't include the char
					// return false
		// return true

	const cleanStrA = cleanSortStr(stringA);
	const cleanStrB = cleanSortStr(stringB);
	const cleanStrALength = cleanStrA.length;
	const cleanStrBLength = cleanStrB.length;

	if (cleanStrALength !== cleanStrBLength) {
		const shorterStr =
			cleanStrA.length < cleanStrB.length ? cleanStrA : cleanStrB;

		const longerStr =
			cleanStrA.length > cleanStrB.length ? cleanStrA : cleanStrB;

		for (let char of shorterStr) {
			if (!longerStr.includes(char)) {
				return false;
			}
		}
	} else {
		for (let char of cleanStrA) {
			if (!cleanStrB.includes(char)) {
				return false;
			}
		}
	}

	return true;
}

function cleanSortStr(str) {
	// create cleanStr (discard spaces or punctuation; convert to lower case)
	// split, sort, join

	const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
	return cleanStr.split('').sort().join('');
}

module.exports = anagrams;

// 2) imagine turning this anagram library into an anagram server.
// people writing their own games can contact your server to get back anagrams (say, requesting that they always be the
// same length, requesting up to some given number of anagrams, specifying a minimum number of characters per word found,
// etc), and write some narrative documentation about how people can use the service

// - the code itself doesn't need to be runnable javascript or a particular language.
// - pseudo code describing the algorithm in detail is fine too