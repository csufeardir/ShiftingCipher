# ShiftingCipher
Shifting cipher crypting/decrypting script written in plain javascript.

Javascript file contains Encryption/Decryption functions, variables are marked with comments, including instructions.
Example usage in a basic web page can be found in .html file.


This shifting cipher function uses the English alphabet with 26 letters. After a plaintext and shift value is given, it takes each character of the plaintext and changes it with the character /shift/ steps ahead.

# Example usage:

Plaintext: Example
Shifting Value: 5

First character of "Example, "E" is 5th character of English alphabet, and shifting value is 5. Therefore we should obtain (5+5)=10th character of the English alphabet, and change it with "E".
Therefore first character of our ciphered text is: "J"

Second character of "Example, "X" is 24th character of English alphabet, and shifting value is 5. Therefore we should obtain (24+5)=29th character of the English alphabet, which doesn't exist. In this case, script starts from the beginning of the alphabet with remaining values.

The alphabet ends at 26th character, so we should take (29-26)=3rd character of the alphabet and change it with "X".
Therefore second character of our ciphered text is: "C"

These steps are taken for every character in the plaintext, and ciphered text is created. Note that white spaces and foreign characters are neglected, and can't interfere with the result.
