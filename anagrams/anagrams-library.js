// Write a program that accepts two strings as arguments.
// It should check if the one string is at least a partial
// anagram of the other string, i.e.:
// 
// - all the string's characters are included in the other string
// - the string's length does not exceed the length of the other string
// - the strings can be of unequal length, but if they are of equal length,
// then they must be exact anagrams of each other
// 
// Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case.

function anagrams(stringA, stringB) {
	// use cleanSortStr to return strings that have been 'standardized' for comparison

	// if strings are of same length
		// check for exact equivalence between cleaned, sorted strings
	// else
		// identify the shorter of the two strings
		// use buildCharMap to return charMaps for strings
			// for each char in shortStr:
				// if longStrCharMap[char] is less than shortStrCharMap[char]
					// return false
	// return true

	const cleanStrA = cleanSortStr(stringA);
	const cleanStrB = cleanSortStr(stringB);
	const cleanStrALength = cleanStrA.length;
	const cleanStrBLength = cleanStrB.length;
	let shortStr;
	let longStr;

	if (cleanStrALength === cleanStrBLength) {
		return cleanSortStr(stringA) === cleanSortStr(stringB);
	} else {
			shortStr =
				cleanStrA.length < cleanStrB.length ? cleanStrA : cleanStrB;

			longStr =
				cleanStrA.length > cleanStrB.length ? cleanStrA : cleanStrB;

			const shortStrCharMap = buildCharMap(shortStr);
			const longStrCharMap = buildCharMap(longStr);

			for (let char of shortStr) {
				if (longStrCharMap[char] < shortStrCharMap[char]) {
					return false;
				}
			}
		}

	return true;
}

function buildCharMap(str) {
	// initialize empty charMap {}
	// build charMap (iterate through str)
	// return charMap

	const charMap = {};

	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	return charMap;
}

function cleanSortStr(str) {
	// create cleanStr (discard spaces or punctuation; convert to lower case)
	// return cleaned & sorted string (split, sort, join)

	const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
	return cleanStr.split('').sort().join('');
}

module.exports = anagrams;
