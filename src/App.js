import './App.css';
import NavBar from './Components/NavBar';
import MovieList from './Components/MovieList';
import React from 'react';



class App extends React.Component {
  constructor(){
    super()
    this.state ={
      movieListSource: [],
      searchQuery: 'Godfather',
      searchBar: false
    }
    
  }

  componentDidMount(){
    if (this.state.searchQuery === ''){
     fetch('http://localhost:3001/movies')
    .then(response => response.json())
    .then(data => this.setState({movieListSource: data}))
    .then(() => alert("List Complete"))
    } else {
     console.log('Search Query : ', this.state.searchQuery);
     fetch(`http://localhost:3001/search?query=${this.state.searchQuery}`)
        .then(response => response.json())
        .then(data => this.setState({movieListSource: data}))
        .then(() => alert("List Complete"))
    }
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
