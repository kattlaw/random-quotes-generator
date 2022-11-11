import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div className="quote-container">
      <div style={{ backgroundColor: "white" }} className="quotebox"> 
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        > 
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author}
          </h5>
        </div>
        </div>
        <button className="quote-button"
          onClick={this.props.handleClick}
        >
          Generate Quote
        </button>
        </div>
    )
  }
}

export default QuoteAndAuthor;