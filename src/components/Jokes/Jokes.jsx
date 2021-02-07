import React from 'react';
import PropTypes from 'prop-types';
import Joke from '../Joke/Joke';

const Jokes = ({ setup, punchline, fetchJoke, loading }) => {

    return (
        <div className="card w-auto mx-auto mt-5">
            <div className="card-body">

                {
                    loading ? <div className="spinner-grow text-primary d-block m-auto" /> : <Joke setup={setup} punchline={punchline} />
                }

                <div className="mt-5">
                    <a href={`https://twitter.com/intent/tweet?text=${setup} ${punchline}&via=ArnaudPinceloup&hashtags=joke,programming`}
                        className="btn btn-outline-primary"
                        target='_blank'
                        data-test='tweet-link'
                    >
                        I want tweet this ! 💙
                    </a>
                    <span onClick={() => fetchJoke()} className="btn btn-outline-primary float-right" data-test='load-joke'>I want another one</span>
                </div>
            </div>
        </div>
    )
};

Jokes.defaultProps = {
    loading: false
};

Jokes.propTypes = {
    fetchJoke: PropTypes.func,
    loading: PropTypes.bool
};

export default Jokes;