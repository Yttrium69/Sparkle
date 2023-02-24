import React, { Component } from 'react';
import Statusbar from '../All/Satusbar.jsx'
import Title from '../All/Title.jsx'
import BoughtPage_TitleArea from './BoughtPage_TitleArea.jsx';
import BoughtPage_IdeaPage from './BoughtPage_IdeaPage.jsx';
import BoughtPage_Profile from './BoughtPage_Profile.jsx';
import BoughtPage_CanUseArea from './BoughtPage_CanUseArea.jsx';

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
                        _title="아이디어 요약"
                        _content="어른들의 영양간식 꼬막 무침, 간장 양념이 질린다는 생각 한 번쯤 해 보셨죠? 꼬막계에 혁명을 일으킬 비장의 꼬막 양념 아이디어, 지금 확인해 보세요!"
                        _tagArr={['#꼬막', '#신박한','와사비','#쫄깃쫄깃','#존맛']}
                        _is_ideaOpen={true}
                    ></BoughtPage_IdeaPage>
                    <BoughtPage_Profile
                        profile={
                            {imgSrc:"/</div>",
                            name:"와사비성애자",
                            soldItems:"79"}
                        }
                    ></BoughtPage_Profile>
                    <BoughtPage_CanUseArea
                        canUse={
                            {
                                Sell:false,
                                Patent:false
                            }
                        }
                    ></BoughtPage_CanUseArea>
                </div>
            </div>
        );
    }
}

export default BoughtPage;