import React, { Component } from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import CoinsDisplayer from './CoinsDisplayer';

class CryptocurrencyContainer extends Component {

  constructor(props) {    
    super(props);
    this.data = [];
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
      // this.setState({sortRank:"fa fa-arrow-down"});
      this.setState({ sortRank:"fa fa-arrow-down", coins: currentCoins.sort((a, b) => Number(a.rank) - Number(b.rank)) }); 
    }
    else{
      this.setState({sortRank:"fa fa-arrow-up", coins: currentCoins.sort((a, b) => Number(b.rank) - Number(a.rank)) });
    }
  }

  sortByName(){
    const currentCoins = this.state.coins.slice(0);
    if(this.state.sortName === 'fa fa-arrow-up'){  
      this.setState({ sortName:"fa fa-arrow-down", coins: currentCoins.sort(function (a, b) {
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
      this.setState({ sortPrice:"fa fa-arrow-down",coins: currentCoins.sort((a, b) => Number(a.price_usd) - Number(b.price_usd)) }); 
    }
    else{
      this.setState({ sortPrice:"fa fa-arrow-up",coins: currentCoins.sort((a, b) => Number(b.price_usd) - Number(a.price_usd)) });
    }

  }

  render() {
    return (
        <div>
            <Header title = "Cryptocurrency Coins Application" />
            <div className="sort-filter-container">
                <SearchBar changeHandler = {this.handleInputChange.bind(this)} />
                <Buttons 
                    sortByRank={this.sortByRank.bind(this)}
                    sortByName={this.sortByName.bind(this)}
                    sortByPrice={this.sortByPrice.bind(this)}

                    sortRank={this.state.sortRank}
                    sortName={this.state.sortName}
                    sortPrice={this.state.sortPrice}
                /> 
            </div>           
            <CoinsDisplayer coinsData={this.state.coins} />
        </div>
    );
  }
}
export default CryptocurrencyContainer;
