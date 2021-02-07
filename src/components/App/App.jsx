import React from 'react'
import JokesContainer from '../Jokes/JokesContainer'

const App = () => {
    return (
        <div className="container">
            <h1 className='text-center mt-5'>Welcome in Joker 😂</h1>
            <JokesContainer />
        </div>
    )
};

export default App