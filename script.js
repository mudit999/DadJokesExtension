fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json()) // convert it into json
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement'); 

        // set inner html - put text into that element
        jokeElement.innerHTML = jokeText;
    })