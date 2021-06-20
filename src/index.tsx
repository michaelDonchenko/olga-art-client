import ReactDOM from 'react-dom'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core'
import theme from './styles/theme'
import './styles/globalStyles.css'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
