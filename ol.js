

function changecol(smth) {
    let maxval = 0xFFFFFF;
    let randomnumber = Math.random() * maxval;
    randomnumber = Math.floor(randomnumber);
    let randcolor = randomnumber.toString(16).padStart(6, "0");
    randcolor = `#${randcolor}`;
    console.log(randcolor);
    smth.style.backgroundColor=randcolor;
}
