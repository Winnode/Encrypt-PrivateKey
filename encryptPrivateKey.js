const ethers = require('ethers');

// Function to encrypt the private key
function encryptPrivateKey(privateKey, password) {
    try {
        const wallet = new ethers.Wallet(privateKey);
        const encryptedWallet = wallet.encrypt(password);
        return encryptedWallet;
    } catch (error) {
        console.error('Error encrypting private key:', error.message);
        throw error;
    }
}

// Function to decrypt the private key
function decryptPrivateKey(encryptedWallet, password) {
    try {
        const wallet = ethers.Wallet.fromEncryptedJson(encryptedWallet, password);
        const privateKey = wallet.privateKey;
        return privateKey;
    } catch (error) {
        console.error('Error decrypting private key:', error.message);
        throw error;
    }
}

// Example usage
const originalPrivateKey = 'your_private_key'; // Replace with your private key
const password = 'your_secure_password'; // Replace with a secure password

// Encrypt the private key
const encryptedWallet = encryptPrivateKey(originalPrivateKey, password);
console.log('Encrypted Wallet:', encryptedWallet);

// Decrypt the private key
const decryptedPrivateKey = decryptPrivateKey(encryptedWallet, password);
console.log('Decrypted Private Key:', decryptedPrivateKey);
