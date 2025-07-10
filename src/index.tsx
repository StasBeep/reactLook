import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider todoStore={store}>
    <App />
  </Provider>
);