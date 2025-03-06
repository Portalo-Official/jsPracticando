import { Quote } from "./models";

const urlQuote = 'https://api.breakingbadquotes.xyz/v1/quotes';

/**
 * @returns {Object} quote information
 */
const fetchQuote = async() =>{
    const res = await fetch(urlQuote);
    const data = await res.json();
    // console.log(data[0]);
    return data[0]
}



/**
 * 
 * @param {HTMLDivElement} element 
*/
export const BreakingbadApp = ( element ) =>{
    document.querySelector("#app-title").innerText = "Breakingbad App";
    element.innerText = "Loading...";

    const quoteLabel = document.createElement("blockquote");
    const authorLabel = document.createElement("h3");
    const nextQuote = document.createElement("button");
    nextQuote.innerText = "Next Quote";

    // const { author, quote } =  fetchQuote();
    // let quoteResponse = new Quote(author, quote);

    /**
     *
     * @param {Quote} quote
     */
    const renderQuote = (quote) => {
    quoteLabel.innerHTML = quote.quote;
    authorLabel.innerHTML = quote.author;
    element.replaceChildren(quoteLabel, authorLabel, nextQuote);
    };

    fetchQuote().then((data) => {
    let quoteResponse = new Quote(...[data.author, data.quote]);

    renderQuote(quoteResponse);
    });

    nextQuote.addEventListener('click', ( event )=> {
        fetchQuote().then( data => {
            quoteLabel.innerHTML = data?.quote || 'No vino la cita';
            authorLabel.innerHTML = data?.author || "No vino autor";
        });
    })
}