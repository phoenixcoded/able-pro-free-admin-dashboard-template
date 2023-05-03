import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// fonts
import 'assets/fonts/inter/inter.css';

// scroll bar
import 'simplebar/src/simplebar.css';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project-imports
import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';
import { APP_BASE_NAME } from './config';

const container = document.getElementById('root');
const root = createRoot(container);

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

root.render(
  <ReduxProvider store={store}>
    <BrowserRouter basename={APP_BASE_NAME}>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
