import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : null,
            currentPlayer : "X"
        };
    }
    onclickF = () =>{
        this.props.change();
            this.setState({value : this.props.player});
            
    }

    render() {
      return (
        <button
        className="square"
        onClick ={()=>{
            this.props.change();
            this.setState({value : this.props.player});
            console.log(this.props.log);
        }}
        
        >
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                value : [],
                currentPlayer : "X"
            }
        }
    
        

    renderSquare(i) {
      return ( 
      <Square
       value={i}
       player = {this.state.currentPlayer}
       log = {this.state.value}
       change={()=>{
        this.state.value.push(this.state.currentPlayer);
        this.setState({currentPlayer : this.state.currentPlayer === "X" ? "O" : "X"})
       }}
        />);
    }
  
    render() {
      const status = `Next player: ${this.state.currentPlayer}`;
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(this.state.value[0])}
            {this.renderSquare(this.state.value[1])}
            {this.renderSquare(this.state.value[2])}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  