import React from 'react';
import ReactDOM from 'react-dom';
import './core/styles/index.scss';
import * as serviceWorker from './serviceWorker';
import AppWrapper from "./modules/template/components/AppWrapper";
import AppNavigation from "./modules/template/components/AppNavigation";
import MusicPage from "./modules/music/pages/MusicPage";
import IndexPage from "./core/pages/IndexPage";

function App() {
    return (
        <div>
            <AppNavigation/>
            <AppWrapper>
                    {/*<IndexPage/>*/}
                    <MusicPage />
            </AppWrapper>
        </div>
    );
}


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
