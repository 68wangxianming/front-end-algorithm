import countBinarySubstrings from '../code/696. 计数二进制子串';

test('696. 计数二进制子串.test', () => {
    expect(countBinarySubstrings("00110011")).toStrictEqual(['0011', '01', '1100', '10', '0011', '01'])
})
