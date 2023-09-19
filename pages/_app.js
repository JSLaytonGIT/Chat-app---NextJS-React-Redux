import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '@/store/store';
import Sidebar from '@/components/Sidebar';

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Sidebar />
            <Component {...pageProps} />
        </Provider>
    )
}

export default App;