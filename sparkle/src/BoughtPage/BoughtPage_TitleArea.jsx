import React, { Component } from 'react';

class BoughtPage_TitleArea extends Component {
    render() {
        const{title, category, date}=this.props;

        return (
            <div class="BoughtPage_Title_div_rootboard">
                <div class="BoughtPage_Title_div_left">
                    <p class="font_700_24px">{title}</p>
                    <span>
                        <p class="font_400_14px">{category}</p>
                        <p class="font_400_14px">{date}</p>
                    </span>
                </div>
                <div class="BoughtPage_Title_div_right">
                    <img src="img/icon_more.svg" alt="img/icon_more.svg"></img>
                </div>
            </div>
        );
    }
}

export default BoughtPage_TitleArea;