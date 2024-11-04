import React from 'react';
import './Services.css';

function Services() {
  const announcements = [
    { title: '[서문 야시장]', description: '서문 야시장에서 음식 매대 지원 및 푸드 트럭 공모' },
    { title: '[대구 마라톤 대회]', description: '푸드트럭 참가 업체 모집 공고' },
    { title: '[칠성 야시장]', description: '칠성 야시장에서 푸드트럭 식품 셀러를 모집합니다' },
  ];

  return (
    <section id="services" className="services-section">
      <div className="service-list">
        {announcements.map((announcement, index) => (
          <div key={index} className="service-item">
            <p className="status">공모중</p>
            <h3>{announcement.title}</h3>
            <p>{announcement.description}</p>
          </div>
        ))}
      </div>
      <h2>Services</h2>
      <p>데이터 기반 분석 자료를 제공합니다.</p>
    </section>
  );
}

export default Services;
