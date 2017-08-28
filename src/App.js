import React, { Component } from 'react';
import './App.css';
import Tarjeta from './Tarjeta';

class App extends Component {
  constructor(props) {
    super(props);
    this.clickear = true;
    this.state = {list: Tarjeta.crearTarjetas()};
    this.onClick = this.onClick.bind(this);    
  }
  onClick(item) {
    console.log("onClick " + item.id);
    if (this.clickear) {
      item.onClick(this);
      var _list = this.state.list
      this.setState({list: _list});
    }
  }
  render() {
    const nombre = "juego de memoria";
    console.log(this);
    return (
      <div id="principal" class="principal">
        <div className="App">
            <h1>{nombre}</h1>
        </div>
        <div className="Tarjetas">
        {
          this.state.list.map(item =>
          <span key={"span-" + item.id}>
            <div className={item.clase} key={"imagen-" + item.id}>
              <img src={item.archivo} alt={item.id} onClick={() => this.onClick(item)}/>
            </div>
            {item.final && <div className="linea"></div>}
          </span>)
        }
        </div>
      </div>
    )
  }
}

export default App;
