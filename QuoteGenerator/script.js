const author = document.getElementById('author');
const quote = document.getElementById('quote');
const btn = document.getElementById('get-random-quote-btn');

// fetch quote
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        // console.log(response);
        const data = await response.json();
        console.log(data);
        quoteText = data.content;
        quoteText = `"${quoteText}"`;

        quote.textContent = quoteText;

        authorText = data.author;
        authorText = authorText.toUpperCase();
        author.textContent = `-${authorText}`;

    } catch (err) {
        quoteText.textContent = 'Oops! Something went wrong.';
        authorText.textContent = '';
        console.error('Error fetching the quote:', error);
    } finally {
        btn.style.setProperty('display', 'block');
    }
}

btn.addEventListener('click', fetchQuote);


fetchQuote();





