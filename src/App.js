import React, { Component } from 'react';
import CoinsDisplayer from './components/CoinsDisplayer';
import './App.css';

class App extends Component {

  constructor(props) {
    
    super(props);
    const data = [];
		this.state = {
      coins: [],
      inputValue:'',
      sortRank:'fa fa-arrow-down',
      sortName:'fa fa-arrow-down',
      sortPrice:'fa fa-arrow-down'
    };
	} 
	  
	componentDidMount() {
		  fetch("https://api.coinmarketcap.com/v1/ticker/?limit=2000")
		  .then(res => res.json())
      .then(fetchedCoins => {                              
                              this.data=fetchedCoins;
                              this.setState({ coins: this.data });
                            }
      );
  }
  
  handleInputChange(e){
    const exp = e.target.value;
    this.setState({ coins: this.data.filter(coin => (coin.name).toUpperCase().match((exp.toUpperCase())) != null) });
  }

  sortByRank(){
    const currentCoins = this.state.coins.slice(0);
    if(this.state.sortRank === 'fa fa-arrow-up'){  
      this.setState({sortRank:"fa fa-arrow-down"});
      this.setState({ coins: currentCoins.sort((a, b) => Number(a.rank) - Number(b.rank)) }); 
    }
    else{
      this.setState({sortRank:"fa fa-arrow-up"});
      this.setState({ coins: currentCoins.sort((a, b) => Number(b.rank) - Number(a.rank)) });
    }
  }

  sortByName(){
    const currentCoins = this.state.coins.slice(0);
    if(this.state.sortName === 'fa fa-arrow-up'){  
      this.setState({sortName:"fa fa-arrow-down"});
      this.setState({ coins: currentCoins.sort(function (a, b) {
          if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
          else if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
          return 0;
        })
      }); 
    }
    else{
      this.setState({sortName:"fa fa-arrow-up"});
      this.setState({ coins: currentCoins.sort(function (a, b) {
          if (a.name.toUpperCase() > b.name.toUpperCase() ) return -1;
          else if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
          return 0;
        })
      });
    }

  }

  sortByPrice(){
    const currentCoins = this.state.coins.slice(0);
    if(this.state.sortPrice === 'fa fa-arrow-up'){  
      this.setState({sortPrice:"fa fa-arrow-down"});
      this.setState({ coins: currentCoins.sort((a, b) => Number(a.price_usd) - Number(b.price_usd)) }); 
    }
    else{
      this.setState({sortPrice:"fa fa-arrow-up"});
      this.setState({ coins: currentCoins.sort((a, b) => Number(b.price_usd) - Number(a.price_usd)) });
    }

  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Coins Application</h1>

        <div className="sort-filter-container">

          <input type="text" id="search-input" placeholder="Filter your search..."  onInput={this.handleInputChange.bind(this)} />

          <span>
            <button onClick={this.sortByRank.bind(this)}>Rank <i className={this.state.sortRank}></i></button>
            <button onClick={this.sortByName.bind(this)}>Name <i className={this.state.sortName}></i></button>
            <button onClick={this.sortByPrice.bind(this)}>Price <i className={this.state.sortPrice}></i></button>
          </span>

        </div>
          
        <CoinsDisplayer coinsData={this.state.coins} />

      </div>
    );
  }
}
export default App;
