function getBracketInfo(bracket, bracketsConfig, openedBrackets) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracket === bracketsConfig[i][0]) {
            if (bracketsConfig[i][0] === bracketsConfig[i][1] && openedBrackets.indexOf(i)>-1){
                return {index: i, isOpen: false}
            }
            return {index: i, isOpen: true}
        } else if (bracket === bracketsConfig[i][1]) {
            return {index: i, isOpen: false}
        }
    }
    return undefined;
}

function check(str, bracketsConfig) {
    console.log(str, bracketsConfig)
    const openedBrackets = [];
    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];
        const info = getBracketInfo(bracket, bracketsConfig, openedBrackets);
        if (info.isOpen) {
            openedBrackets.push(info.index);
        } else {
            if (openedBrackets[openedBrackets.length - 1] === info.index) {
                openedBrackets.pop();
            } else {
                return false;
            }
        }
        console.log(i, bracket, info, openedBrackets);
    }
    return openedBrackets.length === 0;
}

module.exports = check;
