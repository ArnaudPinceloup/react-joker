import { connect } from 'react-redux';
import Jokes from './Jokes';
import { fetchJoke, FETCH_JOKE } from '../../redux/actions/app/joke/joke.actions'
import { getLoadingEntity } from '../../redux/selectors/ui/ui.selectors'
import { URL_JOKE } from '../../constants/constants';
import { getPunchlineJoke, getSetupJoke } from '../../redux/selectors/joke/joke.selectors';

const mapStateToProps = state => {
    return {
        setup: getSetupJoke(state),
        punchline: getPunchlineJoke(state),
        loading: getLoadingEntity(state, FETCH_JOKE)
    }
}

const mapDispatchToProps = {
    fetchJoke: () => fetchJoke({ query: URL_JOKE })
}

const JokesContainer = connect(mapStateToProps, mapDispatchToProps)(Jokes);

export default JokesContainer