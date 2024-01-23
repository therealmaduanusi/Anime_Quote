// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
        quote:`"At any rate, humans change over time based on their actions. Truth be told, at the end of the day, equality is just a fantasy. And most of us go through life denying the fact that we live in a meritocracy."`,
        person: `Ayanokouji Kiyotaka`
    }, {
        quote:`"If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be."`,
        person: `Naruto Uzumaki`
    }, {
        quote:`"If you can't find a reason to fight, then you shouldn't be fighting."`,
        person: `Akame (Akame ga Kill!)`
    }, {
        quote:`"In this world, wherever there is light, there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love."`,
        person: `Madara Uchiha`
    }, {
        quote:`"The difference between the novice and the master is that the master has failed more times than the novice has tried"`,
        person: `Kakashi Hatake`
    },{
        quote:`"People Lives don't end when they die, it ens when they lose faith."`,
        person: `Itachi Uchiha`
    },{
        quote:`"You will never be able to love anybody else until you love yourself."`,
        person: `Lelouch Lamperouge`
    },{
        quote:`"If you don't take risks, you can't create a future."`,
        person: `Monkey D. Luffy`
    },{
        quote:`"If you don’t share someone’s pain, you can never understand them."`,
        person: `Nagato`
    },{
        quote:`"There’s no shame in falling down! True shame is to not stand up again!"`,
        person: `Shintaro Midorima`
    },{
        quote:`"Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully."`,
        person: `Koro-sensei`
    }
]
// console.log(quotes.length);


/*
the Random value could repeat itself
btn.addEventListener('click', function () {
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
*/








// Random value doesn't repeat itself

// Initialize an array to keep track of displayed quotes
let displayedQuotes = [];

// Function to get a non-repeating random quote
function getRandomQuote() {
    if (displayedQuotes.length === 0) {
        // If all quotes have been displayed, reset the array
        displayedQuotes = [...quotes];
    }

    // Get a random index from the remaining quotes
    const randomIndex = Math.floor(Math.random() * displayedQuotes.length);
    console.log(displayedQuotes)
    // Get and remove the quote from the array
    const selectedQuote = displayedQuotes.splice(randomIndex, 1)[0];

    return selectedQuote;
}


// Event listener for the button click
btn.addEventListener('click', function () {
    // Get a non-repeating random quote
    const randomQuote = getRandomQuote();

    // Update the HTML elements with the selected quote
    quote.innerText = randomQuote.quote;
    person.innerText = randomQuote.person;
});

