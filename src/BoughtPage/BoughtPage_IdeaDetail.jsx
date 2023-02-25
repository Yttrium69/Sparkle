import {Link} from 'react-router-dom'

function BoughtPage_IdeaDetail(props){
    const open=props.is_open;
    
    let detailPage=<div></div>;

    if(open===true){
        detailPage=<div>
            <p class="font_700_20px">아이디어</p>
            <p class="font_400_16px">{props.content}</p>
            <Link to="/Review"><button class="font_700_18px">리뷰 작성</button></Link>
        </div>;
    }
    else{
        detailPage=<div></div>
    }

    return detailPage;
}

export default BoughtPage_IdeaDetail;