import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import JokesContainer from './JokesContainer';
import { fetchJoke, FETCH_JOKE } from '../../redux/actions/app/joke/joke.actions';
import Joke from '../Joke/Joke';
import { URL_JOKE } from '../../constants/constants';

const mockStore = configureMockStore([])

describe('JokesContainer', () => {
    let wrapper, store;

    const state = {
        joke: {
            id: 382,
            type: "programming",
            setup: "What did the router say to the doctor?",
            punchline: "It hurts when IP."
        },
        ui: {
            loading: {
                [FETCH_JOKE]: true
            }
        }
    };

    beforeEach(() => {
        store = mockStore(state);
        store.dispatch = jest.fn();

        wrapper = mount(
            <Provider store={store}>
                <JokesContainer />
            </Provider>
        );
    });

    it('should call fetchJoke when user click on btn load-joke', () => {
        wrapper.find('[data-test="load-joke"]').simulate('click');
        expect(store.dispatch).toHaveBeenCalledWith(fetchJoke({ query: URL_JOKE }))
    });

    it('should have good href for tweet link', () => {
        expect(wrapper.find('[data-test="tweet-link"]').prop('href')).toEqual(`https://twitter.com/intent/tweet?text=${state.joke.setup} ${state.joke.punchline}&via=ArnaudPinceloup&hashtags=joke,programming`)
    });

    it('should not contain the Joke component when loading is set to true', () => {
        expect(wrapper.find(Joke).exists()).toEqual(false)
    });

    it('should contain the Joke component when loading is set to false', () => {
        const state = {
            joke: {
                id: 382,
                type: "programming",
                setup: "What did the router say to the doctor?",
                punchline: "It hurts when IP."
            },
            ui: {
                loading: {
                    [FETCH_JOKE]: false
                }
            }
        };
        store = mockStore(state);
        store.dispatch = jest.fn();
        wrapper = mount(
            <Provider store={store}>
                <JokesContainer />
            </Provider>
        );
        expect(wrapper.find(Joke).exists()).toEqual(true)
    });
});