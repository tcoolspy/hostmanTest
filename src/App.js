import React, { useEffect, useState } from 'react';
import './App.sass';

import axios from 'axios';

import TopNavBar from "./components/topnavbar";
import PlaceHolderUser from "./components/placeholderuser";

const App = (props) => {
    const { app } = props.store;
    const userUrl = "https://jsonplaceholder.typicode.com/users";
    //const weatherUrl = "http://tcoolspy-001-site1.htempurl.com/weatherforecast";
    //const weatherUrl = "https://localhost:5001/weatherforecast";
    const ccVisitorsUrl = "https://api.cc.giwutechapps.com/api/visitor";
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(userUrl)
                    .then(res =>  {
                        updateUsers(res.data);
                    });
                // const weatherData = await axios.get(weatherUrl)
                //     .then(wres => {
                //         console.log(wres.data)
                //     })
                const visitorData = await axios.get(ccVisitorsUrl)
                    .then(v => {
                        console.log(v.data);
                    });
            } catch (e) {
                console.log('Loading data error', e);
            }
        };
        fetchData();
    }, []);

    const updateUsers = (usrs) => {
      setUsers(usrs);
      //console.log(usrs);
      //console.log(users);
    };
  return (
    <>
        <TopNavBar />
        <hr />
        <div className="container">
            <h4 className="title is-4">{app.mainPageTitle}</h4>
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
            <hr />
            <p className="subtitle">Fetch Data Test</p>
            {users.map((user) => (
                <div key={user.id}>
                    <PlaceHolderUser {...user} />
                </div>

            ))}
        </div>
    </>
  );
}

export default App;
