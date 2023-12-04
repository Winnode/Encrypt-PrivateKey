# Encrypt-PrivateKey
This script uses the ethers.js library to simplify Ethereum private key operations. Make sure to install the library before running this script with the command npm install ethers.
encryptPrivateKey Function: Takes an Ethereum private key and a password as input. It creates a wallet object using the ethers library, then encrypts that wallet object with the provided password. The result is the encrypted wallet.

decryptPrivateKey Function: Takes an encrypted Ethereum wallet and a password as input. It creates a wallet object from the encrypted JSON using the ethers library, then retrieves the private key from that wallet. The result is the decrypted private key.

Example Usage: Shows how to use these functions. Replace your_private_key with your actual Ethereum private key and your_secure_password with a secure password.

Encrypt the Private Key: Displays the result of encrypting the private key.

Decrypt the Private Key: Displays the result of decrypting the private key.

With this script, you can secure your Ethereum private key by encrypting it and then decrypt it when you need to use it. Remember to always handle your password and private key with utmost care.

However, it is crucial to note that storing and using private keys should be done very carefully. Ensure not to store private keys in publicly accessible places, and always conduct thorough testing, especially in a development or test environment before introducing private keys into production. Additionally, consider using well-established private key security tools approved by the crypto security community
