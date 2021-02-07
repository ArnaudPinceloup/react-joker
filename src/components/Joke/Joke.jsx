import React from 'react';
import PropTypes from 'prop-types';

const Joke = ({ setup, punchline }) => {

    return (
        <div>
            <p className="card-text mb-5" data-test='setup'>{setup}</p>
            <h5 className="card-title" data-test='punchline'>{punchline}</h5>
        </div>
    )
};

Joke.defaultProps = {
    setup: 'A programmer puts two glasses on his bedside table before going to sleep.',
    punchline: 'A full one, in case he gets thirsty, and an empty one, in case he doesn’t.'
};

Joke.propTypes = {
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired
};

export default Joke;