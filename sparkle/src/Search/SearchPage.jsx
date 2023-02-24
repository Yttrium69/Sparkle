import React, { Component, useState } from 'react';
import SearchPage_Searchbar from './SearchPage_Searchbar';

class SearchPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const [keyword, setKeyword]=useState('keyword');
        function changeKeyword(keyword){
            setKeyword(keyword);
        }
        return (
            <div>
                <SearchPage_Searchbar setKeyword={this.props.changeKeyword.bind(this)}></SearchPage_Searchbar>
            </div>
        );
    }
}

export default SearchPage;