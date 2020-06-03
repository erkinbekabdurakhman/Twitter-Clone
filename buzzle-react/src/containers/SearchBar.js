import { connect } from 'react-redux';

import { clearError } from '../actions/error.js';
import { searchMessages } from '../actions/messages.js';
import {
    updateSearchBar,
    clearSearchBar,
    unloadSearchBar
} from '../actions/forms.js';
import SearchBar from '../components/SearchBar.js';

const mapStateToProps = state => ({
    'content': state.searchBar.content
});

const mapDispatchToProps = dispatch => ({
    'clearError': () => dispatch(clearError()),
    'searchMessages': (content, onSuccess) => dispatch(searchMessages(content, onSuccess)),
    'updateSearchBar': (name, value) => dispatch(updateSearchBar(name, value)),
    'clearSearchBar': () => dispatch(clearSearchBar()),
    'unloadSearchBar': () => dispatch(unloadSearchBar())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);