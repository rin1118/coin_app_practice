import React from "react";
import axios from "axios";
import Coins from "./Coin";
/* 
  index.js에 import 될 component,
  component는 하나만 넘길 수 있어 다른 기능들을 추가하려면
  app component 안에 넣어줘야한다

  state를 사용하기위해 class component로 생성

  coin app를 사용하기위해 axios 설치 후 import 
*/

class App extends React.Component {
  state = {
    isLoading: true,
    coins: []
  };

  //api에서 코인 정보 받아오기
  getCoins = async () => {
    console.log("getCoin!");
    const url = "https://api.coinpaprika.com/v1/tickers";
    const { data } = await axios.get(url);
    this.setState({ isLoading: false, coins: data });
  };

  //render 후 한번 실행되는 함수
  componentDidMount() {
    this.getCoins();
  }

  componentDidUpdate() {
    console.log("update");
    setTimeout(this.getCoins, 3000);
  }

  render() {
    console.log("render");
    const { isLoading, coins } = this.state;
    return (
      <h4>
        {isLoading
          ? "로딩중"
          : coins.map(coin => {
              return (
                <Coins
                  key={coin.id}
                  name={coin.name}
                  price={coin.quotes.USD.price}
                  rank={coin.rank}
                />
              );
            })}
      </h4>
    );
  }
}

export default App;
