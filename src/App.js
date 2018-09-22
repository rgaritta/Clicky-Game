import React, { Component } from 'react';
import Card from "./components/Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import cards from "./cards.json";
import "./App.css";

//function to randomize cards
function theShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {

//set the state
state = {
  cards,
  title: 'Best Ever Albums Memory Clicky Game',
  current: 0,
  top: 0,
  correct: "",
  clicked: []
}

//click handler
handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({clicked: this.state.clicked.concat(id)});
  } 
  else {
    this.handleReset();
  }
}

//incremenet handler
handleIncrement = () => {
  const Score = this.state.current + 1;
  this.setState({
    current: Score,
    correct: "You got it!"
  })

  if (Score >= this.state.top) {
    this.setState({top: Score});
  }
  else if (Score === 12) {
    this.setState({correct: "You win!"});
  }
  this.handleShuffle();
}

//reset handler
handleReset = () => {
  this.setState({
    current: 0,
    top: this.state.top,
    correct: "Try Again!",
    clicked: []
  });
  this.handleShuffle();
}


//shuffle handler
handleShuffle = () => {
  let shuffle = theShuffle(cards);
  this.setState({cards: shuffle});
}

  //render the page
  render() {
    return (
      <Wrapper>
        <Nav
          title = {this.state.title}
          current = {this.state.current}
          top = {this.state.top}
          correct = {this.state.correct}
        />

        <Instructions>
          Click on one of these great albums and they will shuffle. Click again, but don't click an album that you've already chosen!
        </Instructions>

        <Container>
          <Row>
              {this.state.cards.map(card => (
                <Column size="md-3 sm-6">
                <Card
                key={card.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={card.id}
                image={card.image}
                />
                </Column>
              ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
