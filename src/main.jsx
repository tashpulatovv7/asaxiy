import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Provider from './context';
import './index.css';
import './utils/i18n';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider>
			<App />
		</Provider>
	</BrowserRouter>
);
