import Cipher from './caesar-cipher';

const c = Cipher();

test('Caesar cipher shifting correctly', () => {
    expect(c.caesarCipher(c.alphabet)).toBe(c.cipher);
    expect(c.caesarCipher('Hello, World!')).toBe('Ifmmp, Xpsme!');
    expect(c.caesarCipher('$ , !')).toBe('$ , !');
    expect(c.caesarCipher('defend the east wall of the castle')).toBe(
        'efgfoe uif fbtu xbmm pg uif dbtumf'
    );
});
