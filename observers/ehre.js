module.exports = function (client, from, to, text, message) {

    var lowerCasedText = text.toLowerCase();
    var observerWords = [
        'ehre',
    ]

    if (new RegExp(observerWords.join("|")).test(lowerCasedText)) {

        var observerTexts = [
            'lumpenLove',
        ];

        // If u wanna mention the user
        //return from+': '+observerTexts[Math.floor(Math.random()*observerTexts.length)];
        return observerTexts[Math.floor(Math.random() * observerTexts.length)];
    }
};
