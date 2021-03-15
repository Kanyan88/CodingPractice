
const fs = require('fs');

try {
    let CharsMap = new Map([
        ['zfvgawagi', 'set'],
        ['ufykqylob', ' '],
        ['gazhkl', '='],
        ['lsdppuf', '/'],
        ['kamnrmirz', 'a'],
        ['kcjmprb', 'c'],
        ['nsxzbbjvw', 'm'],
        ['btohszm', 'd'],
        ['swpkkttax', 'e'],
        ['smivqg', 'x'],
        ['nbyxysg', 'i'],
        ['fhqrcmmp', 't'],
        ['lmkzcgr', ' ']
    ]);


    let data = fs.readFileSync('files/gone_batty', 'utf8');
    lines = data.split("\n");
    let charVars_Lines = 225 - 15;//210/3 = 70
    let i = 0;
    while (i < charVars_Lines) {
        let line1 = lines[14 + i], line3 = lines[14 + i + 2];
        let z = line1.substr(line1.indexOf("%gazhkl%") + 8), y = line3.substring("%zfvgawagi%%ufykqylob%".length, line3.indexOf("%gazhkl%"));
        CharsMap.set(y, String.fromCharCode(eval(z.replace('%%', '%'))));
        i += 3;
    }

    CharsMap.forEach((z, y) => { let repExp = new RegExp(`%${y}%`, 'g'); data = data.replace(repExp, z); });
    data = data.split("\n");
    let flag = [];
    i = 0; while (i < data.length) {
        (data[i].includes(":: set flag_character") ? flag[data[i].substring(21, data[i].indexOf("="))] = data[i].substr(data[i].indexOf("=") + 1) : '')
        i++;

    }

    console.log(flag.join(""));
    //fs.writeFile("gone_batty.bat", data, () => console.log("Output File:gone_batty.bat"));
} catch (err) {
    console.error(err);
}