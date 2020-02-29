import { connect } from 'react-redux';
import { sortBy } from 'underscore';
import { Home } from './component';
import { fetchCharacters, fetchMoreCharacters } from '../../actions';
import { getIsLoading, getPagination, getCharacters } from '../../selectors';

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  pagination: getPagination(state),
  characters: sortBy(Object.values(getCharacters(state)), 'name'),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: (payload) => dispatch(fetchCharacters(payload)),
  fetchMoreCharacters: (payload) => dispatch(fetchMoreCharacters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
