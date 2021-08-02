import './App.css';
import NavBar from './Components/NavBar';
import MovieList from './Components/MovieList';
import React from 'react';



class App extends React.Component {
  constructor(){
    super()
    this.state ={
      movieListSource: [],
      searchQuery: ''

    }
    
  }

  componentDidMount(){
    fetch('http://localhost:3001/movies')
    .then(response => response.json())
    .then(data => this.setState({movieListSource: data}));

  }


  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <MovieList movieListSource={this.state.movieListSource} />
        </div>
        <a href="http://localhost:3000/">The page has rendered</a>
      </div>
    )
  }
  
}

export default App;
