var firstUniqChar = function(s) {
    let frequencies = {}
    let result = -1

    for (let i = 0; i < s.length; i++) {
        if (frequencies[s.charAt(i)] === undefined) {
            frequencies[s.charAt(i)] = 1
        } else {
            frequencies[s.charAt(i)]++
        }
    }

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (frequencies[char] === 1) { //get the FIRST value with the for loop
            return i
        }
    }

    return result
};
