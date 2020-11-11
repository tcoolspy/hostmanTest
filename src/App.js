import React from 'react';
import './App.sass';

import TopNavBar from "./components/topnavbar";

const App = () => {
  return (
    <>
        <TopNavBar />
        <hr />
        <div className="container">
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification is-primary">
                                <p className="title">This app is used to test the front end hosting feature of hostman</p>
                            </article>
                            <article className="tile is-child notification is-warning">
                                <p className="subtitle">This page focuses on styling using the bulma framework</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <p className="subtitle">Middle Tile</p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger">
                            <p className="subtitle">Bottom Tile</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
