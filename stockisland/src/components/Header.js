import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return(
        <div>
            <div className = "Menu">
                <Link to="/board" className="Menu__Item">게시판</Link>
                <Link to="/weekly" className="Menu__Item">주간평가</Link>
                <Link to="/mypage" className="Menu__Item">마이페이지</Link>
                <Link to="/login" className="Menu__Item">로그인</Link>
            </div>
        </div>
    )
}

export default Header;