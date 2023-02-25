import {useState} from 'react';

function BoughtPage_CanUseArea(props) {
    const sell=props.canUse.sell;
    const patent=props.canUse.patent;

    const canSell=sell?"이용 가능":"이용 불가능";
    const canPatent=patent?"가능":"불가능";

    const [btnOpen, setBtnOpen]=useState(false);
    let page=<div></div>;

    if(btnOpen===true){
        page=<div>
            <span class ="font_400_16px">
                <p class ="font_400_16px">상업적 용도</p>
                <p class ="font_400_16px">{canSell}</p>
            </span>
            <span class="font_400_16px">
                <p class ="font_400_16px">특허 출원</p>
                <p class ="font_400_16px">{canPatent}</p>
            </span>
        </div>;
    }
    else{
        page=<div></div>;
    }



    return (
        <div class="BoughtPage_CanUseArea_div_rootBoard">
            <div onClick={()=>{(setBtnOpen(btnOpen?false:true));}}>
                <span class="font_700_20px">이용 가능 범위</span>
                <img src="img/icon_arrow_Down.svg"></img>
            </div>
            <div>{page}</div>
            
        </div>
    );
}

export default BoughtPage_CanUseArea;