import React from 'react';
import LinkBtn from '../All/LinkBtn';

function BoughtPage_Profile(props) {
    const imgSrc=props.profile.profileImg;
    const name=props.profile.name;
    const soldItems=props.profile.soldItems;

    return (
        <div class="BoughtPage_Profile_div_rootBoard">
            <img src={imgSrc}></img>
            <span>
                <p class="font_700_18px">{name}</p>
                <p class="font_400_16px">판매아이디어 {soldItems}개</p>
            </span>
            <LinkBtn title="쪽지 보내기" class="font_400_16px" src="/sendMessage"></LinkBtn>
        </div>
    );
}

export default BoughtPage_Profile;