import React from 'react';
import Quotes from './QuotesArray';
import QuoteAndAuthor from './QuoteAndAuthor';

class RandomQuotes extends React.Component {
    
    constructor() {
        super();
        this.state = {
            quote : Quotes[0].quote,
            author : Quotes[0].author,
        };
    }
    
    generateQuote() {
        const randomNumber = Math.floor(Math.random() * Quotes.length);
        return Quotes[randomNumber];
    }

    handleClick = () => {
        const getNewQuote = this.generateQuote();
        this.setState({
            quote : getNewQuote.quote,
            author : getNewQuote.author
        });
    };

    randomColor() {
        const color = `rgb(
          ${Math.floor(Math.random() * 155)},
          ${Math.floor(Math.random() * 155)},
          ${Math.floor(Math.random() * 155)})`;
        return color;
      }
      
      render() {
        return (
            <div>
                <QuoteAndAuthor
                    displayColor={this.randomColor}
                    handleClick={this.handleClick}
                    {...this.state}
                />
            </div>
        );
      }
    }

export default RandomQuotes;