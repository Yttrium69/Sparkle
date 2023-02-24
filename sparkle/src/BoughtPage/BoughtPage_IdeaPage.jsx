import React, { Component } from 'react';

class BoughtPage_IdeaPage extends Component {
    render() {
        const {title, content, is_ideaOpen}=this.props;
        const tagArr=this.props.tagArr;

        return (
            <div class="BoughtPage_IdeaPage_div_rootBoard">
                <p class="font_700_20px">{title}</p>
                <p class="font_400_16px">{content}</p>
                <div class="BoughtPage_IdeaPage_div_tagBoard">
                    
                </div>
            </div>
        );
    }
}

export default BoughtPage_IdeaPage;