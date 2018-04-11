# Anagrams server

Imagine turning the anagrams library into an anagrams server.
People writing their own games can contact the server to request anagrams.

For example, they can:

* request that the anagrams be the same length as the original string
* specify a minimum number of characters per anagram
* request up to some given number of anagrams

Below is some narrative documentation about how people can use the service.

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

**`language`:**

* This param sets the language for the input string and the outputted anagrams.
* The default value for this param is a string, 'en'.
* Each available language option will be denoted by its [two-letter ISO code](https://en.wikipedia.org/wiki/ISO_639_macrolanguage).

**`length`:**

(WIP)

This param governs whether the server returns anagrams of the same length as
the given word; default: false; same length? set length? minimum length?)

**`return_count`:**

(WIP)

### Use Case #2: user wants to get all possible permutations of a string

##### General notes

For this use case, the user cares only about getting all possible permutations of the string.

##### Request format

TBD

##### Description of parameters

TBD

### Other things to consider (TODO)
* allowing the user to request anagrams for a list of strings (not just one)
* error handling for invalid user input