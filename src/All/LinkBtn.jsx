import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

LinkBtn.propTypes = {
    
};

function LinkBtn(props) {
    return (
        <Link to={props.src}>
            <button class={props.class}>{props.title}</button>
        </Link>
    );
}

export default LinkBtn;