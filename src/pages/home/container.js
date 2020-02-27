import { connect } from 'react-redux';
import { Home } from './component';
import { fetchCharacters } from '../../actions';
import { getCharacters, getIsLoading } from '../../selectors';

const mapStateToProps = (state) => ({
  characters: getCharacters(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: () => dispatch(fetchCharacters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
