import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './store'
import './style.scss'
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Toaster position='top-center' />
		<App />
	</Provider>
)
