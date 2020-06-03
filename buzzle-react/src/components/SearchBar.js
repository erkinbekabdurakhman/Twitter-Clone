import React from 'react';
import { Redirect } from "react-router";

class SearchBar extends React.Component {
    componentWillUnmount() {
        this.props.unloadSearchBar();
        this.props.clearError();
    }

    handleChange = event => {
        this.props.updateSearchBar(event.target.name, event.target.value);
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.searchMessages(this.props.content, () => {
            this.props.clearSearchBar();
        });
    }

    render() {
        const user = this.props.user;
        // const content = this.props.content;
        return (user ?
            <Redirect to="/" />
            :
            <form action="/messages/search" method="POST" className="form-inline" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                onChange={this.handleChange} aria-label="Search" name="content" />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar;