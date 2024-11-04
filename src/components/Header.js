import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <h1>TruckSiteFinder</h1>
        <ul>
          <li><a href="#recent">최근 공모</a></li>
          <li><a href="#analyinfo">상권 분석 정보</a></li>
          <li><a href="#lawinfo">규제 정보</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
