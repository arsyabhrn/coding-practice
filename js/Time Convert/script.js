function TimeConvert(num) {
    let min = 0,
        sec = 0;
    min = Math.floor(num / 60);
    sec = num % 60;
    return console.log(`${min}:${sec}`);
}