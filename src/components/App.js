import React from 'react';
import CarsList from './carsList';
import { BrowserRouter, Route } from 'react-router-dom';
import CarDetails from './CarDetails';
import BookCar from './BookCar';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={CarsList}/>
                    <Route path="/bookCar" exact component={BookCar}/>
                    <Route path="/car/details" exact component={CarDetails}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;  