import React, { Component } from 'react';

class Title extends Component {
    render() {
        const title=this.props.title;
        return (
            <div class="Title_div_rootBoard font_400_18px">
                <img src="img/icon_left-arrow_svg.svg" alt="icon_left-arrow"></img>
                <p>{title}</p>
            </div>
        );
    }
}

export default Title;