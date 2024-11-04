import React from 'react';
import './About.css';
import foodtruckimg from '../assets/food-truck-design1.avif';

function About() {
  return (
    <section id="about">
      <h2>About Us</h2>
      <p>TruckSiteFinder가 제공하는 푸드트럭 공모 정보를 기반으로 사업을 시작하세요.</p>
      <img src={foodtruckimg} alt="푸드트럭" />
      <div className="info-sections">
          <div className="info-part">
            {/* <h3>파트 1 제목</h3> */}
            <p>TruckSiteFinder는 푸드트럭 사업자들이 성공적인 입지 선정 및 영업 시간을 결정할 수 있는 돕는 플랫폼으로 자동으로 푸드트럭 공모정보를 수집하고 상권 분석 및 교통량 데이터를 제공하여 더 나은 의사 결정을 지원합니다.</p>
          </div>
          <div className="info-part">
            {/* <h3>파트 2 제목</h3> */}
            <p>TruckSiteFinder는 푸드트럭 사업 성공에 필수적인 입지 선정과 규제 정보 확보를 쉽게 할 수 있도록 지원하는 시스템의 필요성을 강조하고 실시간으로 데이터를 제공해 정보 수집의 어려움을 해소합니다.</p>
          </div>
          <div className="info-part">
            {/* <h3>파트 3 제목</h3> */}
            <p>TruckSiteFinder는 직관적인 UI 설계를 통해 사용자가 쉽고 빠르게 이용할 수 있습니다. 또한, 계속해서 서비스를 발전시키기 위해 지속적으로 유지보수 할 계획을 가지고 있습니다. </p>
          </div>
        </div>
    </section>
  );
}

export default About;
