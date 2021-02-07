import { shallow } from 'enzyme';
import JokesContainer from '../Jokes/JokesContainer';
import App from './App';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should contain a title h1 with good text', () => {
        expect(wrapper.find('h1').text()).toEqual('Welcome in Joker 😂');
    });

    it('should contain a JokesContainer', () => {
        expect(wrapper.find(JokesContainer).exists()).toEqual(true)
    });
});