function LetterCapitalize(str) {
    let newstr = str.split(" ");
    console.log(newstr);
    for (let i = 0; i < newstr.length; i++) {
        newstr[i] = newstr[i][0].toUpperCase() + newstr[i].substr(1);
    }
    console.log(newstr);
    let newstr1 = newstr.join(" ");
    return newstr1;
}