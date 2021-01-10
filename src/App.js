import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: "React is the Best!",
      unsplashImages: [
        {
          id: 'VToLWHjHINc',
          color: "#8c8c8c",
          description: "Wake up\r\nFollow your path\r\nGet it done",
          alt_description: "people walking on the street",
          urls: {
            raw: "https://images.unsplash.com/photo-1486487687687-e105fd869528?ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwxfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1",
            full: "https://images.unsplash.com/photo-1486487687687-e105fd869528?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwxfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=85",
            regular: "https://images.unsplash.com/photo-1486487687687-e105fd869528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwxfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
            small: "https://images.unsplash.com/photo-1486487687687-e105fd869528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwxfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=400",
            thumb: "https://images.unsplash.com/photo-1486487687687-e105fd869528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwxfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200"
          }
        },
        {
          id: "Q8gsXy6C2g0",
          color: "#260c0c",
          description: "Drops in the dark",
          alt_description: "bokeh photography wallpaper",
          urls: {
            raw: "https://images.unsplash.com/photo-1495050489622-a17b23172ed6?ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwyfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1",
            full: "https://images.unsplash.com/photo-1495050489622-a17b23172ed6?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwyfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=85",
            regular: "https://images.unsplash.com/photo-1495050489622-a17b23172ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwyfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
            small: "https://images.unsplash.com/photo-1495050489622-a17b23172ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwyfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=400",
            thumb: "https://images.unsplash.com/photo-1495050489622-a17b23172ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwyfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200"
          }
        },
        {
          id: "qsBUMR_mApU",
          color: "#d9a659",
          description: "Agama Agama",
          alt_description: "selective focus photography of gray and red lizard",
          urls: {
            raw: "https://images.unsplash.com/photo-1489683613038-418c9baa930a?ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwzfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1",
            full: "https://images.unsplash.com/photo-1489683613038-418c9baa930a?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwzfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=85",
            regular: "https://images.unsplash.com/photo-1489683613038-418c9baa930a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwzfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
            small: "https://images.unsplash.com/photo-1489683613038-418c9baa930a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwzfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=400",
            thumb: "https://images.unsplash.com/photo-1489683613038-418c9baa930a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTA1OTV8MHwxfHNlYXJjaHwzfHx5YW91bmRlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200"
          },
        }
      ]
    }
  }

  componentDidMount() {
    fetch("https://api.unsplash.com/photos?client_id=tJg6Eqf4bXcHh574Yz09jXBi1a2bMxdyjyJ1j_PDyow")
      .then(response => response.json())
      .then(responseImagesJson => this.setState({ unsplashImages: responseImagesJson }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.message}</h1>
          <p>
            <ul>
              {this.state.unsplashImages.map(unsplashImage => (
                <li key={unsplashImage.id}>{
                   unsplashImage.alt_description
                  }
                  </li>
              ))}
            </ul>
          </p>
          <button onClick={() => this.setState(
            { message: "List of images" }
          )
          }>
            CHANGE MESSAGE
        </button>
        </header>
      </div>
    );
  }
}

export default App;
