/**
 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 示例:

 输入："23"
 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
 * */
/**
 * @param {string} digits
 * @return {string[]}
 */
export default (str) => {
    // 建立电话号码键盘映射
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 把输入字符串按单字字符分割变成数组 234 => [2, 3, 4]
    let num = str.split('');
    // 保存键盘映射后的字母内容，23 => ['abc', 'def']
    let code = [];
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item])
        }
    });

    let comb = (arr) => {
        // 临时变量用来保存前两个组合的结果
        let temp = [];
        // 最外层的循环遍历的是一个元素，内侧的循环遍历的是第二个元素
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, temp);
        if (arr.length > 1) {
            comb(arr)
        } else {
            return temp;
        }
        return arr[0]
    };
    return comb(code)
}
