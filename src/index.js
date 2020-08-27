import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';

function Main(props) {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);