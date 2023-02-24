import React, { Component } from 'react';
import Statusbar from '../All/Satusbar.jsx'
import Title from '../All/Title.jsx'
import BoughtPage_TitleArea from './BoughtPage_TitleArea.jsx';
import BoughtPage_IdeaPage from './BoughtPage_IdeaPage.jsx';

class BoughtPage extends Component {

    render() {
        return (
            <div>
                <Statusbar></Statusbar>
                <Title title="구매한 아이디어"></Title>
                <div class="defaultBoard">
                    <BoughtPage_TitleArea
                        title="꼬막 요리계의 혁명적 아이디어"
                        category="친환경, 에코프렌들리"
                        date="2023. 01. 24"
                    ></BoughtPage_TitleArea>
                    <BoughtPage_IdeaPage
                        title="아이디어 요약"
                        content="어른들의 영양간식 꼬막 무침, 간장 양념이 질린다는 생각 한 번쯤 해 보셨죠? 꼬막계에 혁명을 일으킬 비장의 꼬막 양념 아이디어, 지금 확인해 보세요!"
                        tagArr={['#꼬막', '#신박한','와사비','#쫄깃쫄깃','#존맛']}
                        is_ideaOpen={true}
                    ></BoughtPage_IdeaPage>
                </div>
            </div>
        );
    }
}

export default BoughtPage;