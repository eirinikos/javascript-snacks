# Anagrams server

Let's turn the anagrams library into an anagrams server.
People writing their own games can contact the server to request anagrams.

For example, they can:

* request anagrams in a specific language
* request anagrams of a specific length or range of lengths
* request up to some given number of anagrams

In regards to user input, the anagrams server will adhere to the same guidelines described in the [anagrams library](../anagrams-library.js); i.e., it will be case-insensitive and ignore spaces and punctuation.

Below is some narrative documentation about how people might use this hypothetical service.

### Use Case #1: user wants to get anagrams that are verifiable words

##### General notes

The documentation for this use case will include a list of available languages and dictionary APIs. 

##### Request format

The user's request must include the following required parameters:

* **`string`**
(character limit: TBD)

The user's request can also include the following optional parameters:

* **`language`**
* **`length`**
* **`return_count`**

##### Description of parameters

**`language`** _(string)_

* This param sets the language for both the input string and the outputted anagrams.
* The default value for this param is: `'en'`
* Each available language option will be denoted by its [two-letter ISO code](https://en.wikipedia.org/wiki/ISO_639_macrolanguage).

**`length`** _(hash)_

* This param governs the length(s) of the anagrams returned by the server.
* By default, the server will return anagrams of the same length as the original string.

Within the `length` hash, the user can specify `minimum` and/or `maximum` values of character length. Here's an example of a request for anagrams between 8 and 40 characters long.

    "length": {
    	"minimum": 8,
    	"maximum": 40
    }

Alternatively, the user can specify a single `desired` length for the outputted anagrams, e.g.,:

    "length": {
    	"desired": 8
    }

**`return_count`** _(integer)_

(WIP)

### Use Case #2: user wants to get all possible permutations of a string

##### General notes

For this use case, the user cares only about getting all possible permutations of the string.

##### Request format

TBD

##### Description of parameters

TBD

### Other things to consider (TODO)
**The current incarnation of the anagrams library only serves to return `true` or `false` in regards to whether a given pair of input strings are exact or partial anagrams of each other. We would either need to adapt the code to fit the expectations laid out in this documentation, or we'd need to modify our expectations in order to fit the code's current functionality. Or, both.**

We'll also need to consider:
* allowing the user to request anagrams for a list of strings (not just one)
* error handling for invalid user input