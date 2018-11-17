const Star = (props) => {
  const numbersOfStar = 1 + Math.floor(Math.random() * 9)
  // let stars = [];
  // for (let i = 0; i < numbersOfStar; i++) {
  //   stars.push(<i key={i} className="fa fa-star"></i>)
  // }

  return (
    <div className="col-5">
      {_.range(numbersOfStar).map(i => {
        <i key={i} className="fa fa-star"></i>
      })
      }
    </div>
  )
}

const Button = (props) => {
  return (
    <div className="col-2">
      =
    </div>
  )
}

const Answer = (props) => {
  return (
    <div className="col-5">
    {props.selectedNumbers.map((number, i) => 
    	<span key={i}>{number}</span>	
    )}
    </div>
  )
}

const Numbers = (props) => {
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) => {
          <span key={i}>{number}</span>
        })}
      </div>
    </div>
  )
}

Numbers.list = _.range(1, 10) // lodash gera numeros aleatorios entre 1 e 10

class Game extends React.Component {
  state = {
    selectedNumbers: [1,2,3]
  };
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Star />
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers}/>
        </div>
        <br />
        <Numbers />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Game />
    )
  }
}

ReactDOM.render(<App />, mountNode);