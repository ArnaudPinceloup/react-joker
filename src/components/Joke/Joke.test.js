import { shallow } from 'enzyme';
import Joke from './Joke';

describe('Joke', () => {
    let wrapper;
    const props = {
        setup: 'Why do Java programmers wear glasses?',
        punchline: 'Because they don\'t C#'
    }

    beforeEach(() => {
        wrapper = shallow(<Joke {...props} />);
    });

    it('should contain setup passed in the props', () => {
        expect(wrapper.find('[data-test="setup"]').text()).toEqual(props.setup)
    });

    it('should contain punchline passed in the props', () => {
        expect(wrapper.find('[data-test="punchline"]').text()).toEqual(props.punchline)
    });
});