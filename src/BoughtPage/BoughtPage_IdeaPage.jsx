import React, { Component, useEffect, useState } from 'react';
import BoughtPage_IdeaDetail from './BoughtPage_IdeaDetail';
import {Link} from 'react-router-dom';

function BoughtPage_IdeaPage(props){
    const title=props._title;
    const content=props._content;
    const tagArr=props._tagArr;

    const tagCompArr=tagArr.map(tag=><Link to="/Search"><button class="font_400_16px">{tag}</button></Link>);

    const[open, setOpen]=useState(false);
    const [btnTitle, setTitle]=useState("아이디어 열람");

    let siqlf=()=>setTitle("아이디어 열람");

    if(open===true){
        siqlf=()=>setTitle("아이디어 열람");
    }
    else{
        siqlf=()=>setTitle("아이디어 접기");
    }


    return(
        <div class="BoughtPage_IdeaPage_div_rootBoard">
             <p class="font_700_20px">{title}</p>
             <p class="font_400_16px">{content}</p>
             <div class="BoughtPage_IdeaPage_div_tagBoard">
                 {tagCompArr}
             </div>
             <button class="font_400_20px" onClick={()=>{(setOpen(open?false:true)); siqlf();}}>{btnTitle}</button>
             <BoughtPage_IdeaDetail is_open={open} content="제가 생각한 아이디어는 바로 깨끗하게 잘 씻은 꼬막에 간장 양념 대신 와사비 양념을 끼얹는 것입니다. 와사비를 좋아하는 분이라면 누구든 맛있게 드실 수 있는 아삭 상큼 초록색 맛, 오늘 저녁은 꼬막 와사비 무침 어떠실까요? 구매해 주셔서 감사합니다."></BoughtPage_IdeaDetail>
         </div>
    )
}

export default BoughtPage_IdeaPage;