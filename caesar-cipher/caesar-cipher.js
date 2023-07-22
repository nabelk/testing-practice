export default function Cipher() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cipher = 'bcdefghijklmnopqrstuvwxyza';

    const caesarCipher = (str) => {
        let newString = '';
        for (let i = 0; i < str.length; i++) {
            if (/[A-Za-z]/.test(str[i])) {
                const alphabetIdx = alphabet.indexOf(str[i].toLowerCase());
                const cipherToArr = cipher.split('');
                if (/[A-Z]/.test(str[i])) {
                    newString += cipherToArr[alphabetIdx].toUpperCase();
                } else {
                    newString += cipherToArr[alphabetIdx];
                }
            } else {
                newString += str[i];
            }
        }
        return newString;
    };

    return {
        alphabet,
        cipher,
        caesarCipher,
    };
}
