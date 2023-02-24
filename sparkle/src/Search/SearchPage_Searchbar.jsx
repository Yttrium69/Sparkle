import React, { Component } from 'react';

class SearchPage_Searchbar extends Component {
    render() {
        const keyword=this.props.keyword;
        return (
            <div>
                {keyword}
            </div>
        );
    }
}

export default SearchPage_Searchbar;