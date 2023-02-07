function writeTextByJS(id, text, speed) {

    var ele = document.getElementById(id),
        txt = text.join("").split("");

    var interval = setInterval(function () {

        if (!txt[0]) {

            return clearInterval(interval);
        };

        ele.innerHTML += txt.shift();
    }, speed != undefined ? speed : 100);

    return false;
};
writeTextByJS(
    "demo",
    [
        "Happy Birthday! 🥳🥳        ",
        "Поздравляю тебя с днём рождения! Хочу пожелать тебе не только сегодня, но и все дни в году, чтобы у тебя было прекрасное настроение.\n Побольше улыбок тебе,\n позитива и поводов для радости. Желаю, чтобы рядом всегда были верные и надёжные люди, с которыми ты всегда будешь самим собой.🤗 Счастья, крепкого здоровья, благополучия! Пусть по жизни будут только приятные сюрпризы!",
        "🍰🍭🍬🍡🍧🥂🎊 Herzlichen Glückwunsch zum Geburtstag!"
    ]
)
