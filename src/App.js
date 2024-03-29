import {BrowserRouter} from "react-router-dom";
import MainComponent from "./components/MainComponent";
import {ConfigureStore} from "./redux/configureStore";
import {Provider} from 'react-redux';

const store = ConfigureStore();

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <MainComponent/>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
