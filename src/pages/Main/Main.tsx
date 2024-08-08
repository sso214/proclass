import React from 'react';

import { AppDownloadDialog, FormDialog } from './components';
import * as S from './Main.styles';

import SVG_LOGO from '@/assets/logo.svg?react';
import SVG_LOGO2 from '@/assets/logo2.svg?react';
import SVG_SYMBOL from '@/assets/symbol.svg?react';
import { useDialog } from '@/common/hooks';

export default function Main() {
  const { onPresent } = useDialog();

  const openAppDownloadDialog = () => onPresent(<AppDownloadDialog />);
  const openFormDialog = () => onPresent(<FormDialog />);

  return (
    <main css={S.wrapper}>
      <header css={S.header}>
        <nav>
          <SVG_LOGO />
          <button className='pc' type='button' onClick={openAppDownloadDialog}>
            앱 다운로드
          </button>
          <a className='mo' href='#' target='_blank' rel='noopener noreferrer'>
            앱 다운로드
          </a>
        </nav>
      </header>

      <div css={S.container}>
        <section css={S.section01}>
          <article
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-back'
            data-aos-delay='300'
            data-aos-offset='0'
            data-aos-duration='1000'
          >
            <h1>
              커리어 내비게이션
              <br />
              프로클래스
            </h1>
            <p>
              생성형 AI와 러닝저니가 결합된 솔루션으로
              <br />
              임직원을 위한 최적의 성장 경로를 안내합니다.
            </p>
            <button type='button' onClick={openFormDialog}>
              도입 문의
            </button>
          </article>
        </section>

        <section css={S.section02}>
          <article>
            <h2 css={S.title}>
              임직원 교육을 <br className='mo' />
              고민하는 순간,
              <br />
              <span>
                회사의 성장은 <br className='mo' />
                시작됐습니다.
              </span>
            </h2>
          </article>
        </section>

        <section css={S.section03}>
          <article>
            <div className='title' data-aos='fade-up'>
              <img src='/proclass/images/section03-title-symbol.png' alt='교육담당자의 고민' />
              <h2 css={S.title}>교육담당자의 고민</h2>
            </div>
            <ol className='worryList' data-aos='fade-up' data-aos-delay='300'>
              {[
                {
                  backgroundColor: '#FFF4F3',
                  indexColor: '#FF9283',
                  iconColor: '#FFB0A9',
                  image: '/proclass/images/worry01.png',
                  el: (
                    <>
                      임직원 교육을 위한
                      <br />
                      <span style={{ color: '#FF7A68' }}>자본과 인력이 부족해요</span>
                    </>
                  ),
                },
                {
                  backgroundColor: '#F5F2FF',
                  indexColor: '#9075FF',
                  iconColor: '#C0ADFF',
                  image: '/proclass/images/worry02.png',
                  el: (
                    <>
                      <span style={{ color: '#7140FF' }}>높은 인력 분산도로</span>
                      <br />
                      교육 운영 자체가 어려워요
                    </>
                  ),
                },
                {
                  backgroundColor: '#ECF0FF',
                  indexColor: '#6891F9',
                  iconColor: '#A3B7FF',
                  image: '/proclass/images/worry03.png',
                  el: (
                    <>
                      <span style={{ color: '#1D5CFF' }}>급변하는 경영환경에 적합한</span>
                      <br />
                      교육 내용이 필요해요
                    </>
                  ),
                },
              ].map(({ el, image, backgroundColor, indexColor, iconColor }, index) => (
                <li key={index}>
                  <div style={{ backgroundColor }}>
                    <span style={{ backgroundColor: indexColor }}>0{index + 1}</span>
                    <img src={image} alt={image} />
                    <h4>{el}</h4>
                  </div>
                  <span>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} style={{ backgroundColor: iconColor }} />
                    ))}
                  </span>
                </li>
              ))}
            </ol>
          </article>

          <article>
            <div className='title' data-aos='fade-up'>
              <SVG_SYMBOL />
              <h2 css={S.title}>프로클래스가 필요한 이유</h2>
            </div>
            <ol className='solutionList' data-aos='fade-up' data-aos-delay='300'>
              {[
                <>
                  월 구독 가격제로
                  <br />
                  부담 최소화,
                  <br />
                  실시간 대응 가능한
                  <br />
                  운영 전담 조직
                </>,
                <>
                  모바일 최적화된
                  <br />
                  교육 환경,
                  <br />
                  학습 독려 자동화
                  <br />
                  시스템 구축
                </>,
                <>
                  리더십, 비즈니스,
                  <br />
                  이슈・트렌드 등<br />
                  당장 필요한 지식들을
                  <br />
                  매일 신규 제공
                </>,
              ].map((el, index) => (
                <li key={index}>
                  <span>0{index + 1}</span>
                  <p>{el}</p>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section css={S.section04}>
          <article>
            <h3>
              생성형 AI와 <br className='mo' />
              러닝저니를 통해
              <br />
              성장 경로 이탈을 <br className='mo' />
              방지해보세요.
            </h3>
          </article>
        </section>

        <section css={S.section05}>
          <article>
            <div className='title' data-aos='fade-up'>
              <span style={{ backgroundColor: '#E3E9FF', color: '#5377FF' }}>Solution 1. 기업의 성장을 위해</span>
              <h2 css={S.title}>
                시공간 제약 없이 <br className='mo' />
                다양한 교육 형태를 결합한
                <br />
                몰입형 러닝저니를 <br className='mo' />
                구현합니다.
              </h2>
            </div>
            <ol className='mockupList'>
              {[
                {
                  image: '/proclass/images/mockup01.png',
                  el: (
                    <>
                      동영상, 카드뉴스, 아티클 등<br />
                      다양한 형태의 학습 콘텐츠를 결합하여
                      <br />
                      러닝저니를 만들 수 있습니다.
                    </>
                  ),
                },
                {
                  image: '/proclass/images/mockup02.png',
                  el: (
                    <>
                      스터디 기능을 통해 멀리 떨어져 있는
                      <br />
                      동료들과 함께 학습하며
                      <br />
                      인사이트를 공유할 수 있습니다.
                    </>
                  ),
                },
              ].map(({ image, el }, index) => (
                <li key={index} data-aos='fade-up' data-aos-delay={index === 1 ? 300 : 700}>
                  <img src={image} alt={image} />
                  <p>{el}</p>
                </li>
              ))}
            </ol>
          </article>

          <article>
            <div className='title' data-aos='fade-up' data-aos-delay='900'>
              <span style={{ backgroundColor: '#FFE6E3', color: '#FF7A68' }}>Solution 2. 개인의 성장을 위해</span>
              <h2 css={S.title}>
                생성형 AI 적용으로 <br className='mo' />
                오직 개인을 위한
                <br />
                러닝 플레이를 선사합니다.
              </h2>
            </div>
            <ol className='mockupList'>
              {[
                {
                  image: '/proclass/images/mockup03.png',
                  el: (
                    <>
                      <span className='pc'>
                        커리어 고민을 프클AI에게 물어보세요.
                        <br />
                        질문에 대한 답변과 함께
                        <br />
                        연관 콘텐츠를 추천합니다.
                      </span>
                      <span className='mo'>
                        커리어 관련 궁금증을
                        <br />
                        프클AI에게 물어보세요.
                        <br />
                        질문에 대한 답변과 함께
                        <br />
                        연관 콘텐츠를 추천합니다.
                      </span>
                    </>
                  ),
                },
                {
                  image: '/proclass/images/mockup04.png',
                  el: (
                    <>
                      <span className='pc'>
                        학습 내용 기반의 AI 퀴즈를 풀어보세요.
                        <br />
                        높아진 학습 효과만큼
                        <br />더 많은 보상을 얻을 수 있습니다.
                      </span>
                      <span className='mo'>
                        학습 내용 기반으로
                        <br />
                        자동 생성된 퀴즈를 풀어보세요.
                        <br />
                        높아진 학습 효과만큼
                        <br />더 많은 보상을 얻을 수 있습니다.
                      </span>
                    </>
                  ),
                },
              ].map(({ image, el }, index) => (
                <li key={index} data-aos='fade-up' data-aos-delay={index === 1 ? 1200 : 1600}>
                  <img src={image} alt={image} />
                  <p>{el}</p>
                </li>
              ))}
            </ol>
          </article>

          <article>
            <div className='title' data-aos='fade-up' data-aos-delay='1800'>
              <span style={{ backgroundColor: '#EBE4FF', color: '#9777F3' }}>Solution 3. 자기주도적 성장을 위해</span>
              <h2 css={S.title}>
                독려가 필요 없는 학습 몰입.
                <br />
                프로클래스의 <br className='mo' />
                최종 목적지입니다.
              </h2>
            </div>
            <ul className='processList'>
              {[
                [
                  {
                    image: '/proclass/images/process01.png',
                    title: '러닝저니 커스텀',
                    text: (
                      <>
                        스스로 학습 목표와 계획을 설정하고
                        <br />
                        원하는 시간에 푸시 알림을 받으세요.
                      </>
                    ),
                  },
                  {
                    image: '/proclass/images/process02.png',
                    title: '러닝저니 리뷰',
                    text: (
                      <>
                        주간・월간 목표 달성률을 확인하고
                        <br />
                        나의 주요 학습 키워드를 확인하세요.
                      </>
                    ),
                  },
                ],
                [
                  {
                    image: '/proclass/images/process03.png',
                    title: '최대 1만 개 커리어 콘텐츠',
                    text: (
                      <>
                        누적 회원 30만 명 보유한
                        <br />
                        CreativeTV의 최고&최신 콘텐츠를
                        <br />
                        무제한 수강하세요.
                      </>
                    ),
                  },
                  {
                    image: '/proclass/images/process04.png',
                    title: '콘텐츠 큐레이션',
                    text: (
                      <>
                        직무, 관심사, 학습 기록 등<br />
                        개인의 학습 니즈가 반영된
                        <br />
                        맞춤 큐레이션을 경험하세요.
                      </>
                    ),
                  },
                ],
              ].map((values, index) => (
                <li key={index} data-aos='fade-up' data-aos-delay='2000'>
                  {values.map(({ image, title, text }, index) => (
                    <React.Fragment key={title}>
                      <div>
                        <img src={image} alt={title} data-aos='fade-up' data-aos-delay='2200' />
                        <h5>{title}</h5>
                        <p>{text}</p>
                      </div>
                      {index !== values.length - 1 && (
                        <span>
                          {Array.from({ length: 4 }).map((_, i) => (
                            <i key={i} />
                          ))}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section css={S.section06}>
          <article>
            <div className='title' data-aos='fade-up' data-aos-delay='3100'>
              <span>EVENT</span>
              <h2 css={S.title}>
                베타 테스트 진행 중!
                <br />
                푸짐한 선물을 드려요.
              </h2>
            </div>
            <ul className='giftList' data-aos='fade-up' data-aos-delay='3500'>
              {[
                {
                  image: '/proclass/images/gift01.png',
                  title: '앱 다운로드 / 가입 시',
                  text: (
                    <>
                      선착순 100명
                      <br />
                      커피 쿠폰 증정
                    </>
                  ),
                },
                {
                  image: '/proclass/images/gift02.png',
                  title: '도입 문의 시',
                  text: (
                    <>
                      MIT 테크놀로지 리뷰
                      <br />
                      구독권(1년) 증정
                    </>
                  ),
                },
                {
                  image: '/proclass/images/gift03.png',
                  title: '도입 확정 시',
                  text: (
                    <>
                      법정필수교육 제공
                      <br />
                      (일부 고객사에 한함)
                    </>
                  ),
                },
              ].map(({ image, title, text }) => (
                <li key={title}>
                  <img src={image} alt={title} />
                  <h5>{title}</h5>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <ul className='guideList' data-aos='fade-up' data-aos-delay='3900'>
              <li>이벤트 상품은 당첨자 선정 후 익월 발송 예정이며, 당사 사정에 의해 상품 내용은 변동될 수 있습니다.</li>
              <li>상품 증정을 위해 앱 가입 정보를 정확히 입력해주시기 바랍니다.</li>
              <li>선착순 마감 등 당사 사정에 의해 이벤트는 조기 종료될 수 있습니다.</li>
            </ul>
          </article>
        </section>

        <section css={S.section07}>
          <article>
            <h2 css={S.title}>
              프로클래스와 함께 떠날
              <br />
              성장의 첫 여정.
            </h2>
            <div>
              <button type='button' onClick={openFormDialog}>
                도입 문의
              </button>
              <button className='pc' type='button' onClick={openAppDownloadDialog}>
                앱 다운로드
              </button>
              <a className='mo' href='#' target='_blank' rel='noopener noreferrer'>
                앱 다운로드
              </a>
            </div>
          </article>
        </section>
      </div>

      <footer css={S.footer}>
        <article>
          <div>
            <SVG_LOGO2 />
            <ol>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
            </ol>
          </div>

          <ol>
            <li>
              <p>TEL : 02)2072-6280</p>
              <p>E-mail : proclass@hri.co.kr</p>
            </li>
            <li>
              <p>서울특별시 종로구 율곡로 194 (현대그룹빌딩)</p>
              <p className='pc'>사업자등록번호 : 102-81-39251</p>
            </li>
            <li>
              <p className='mo'>사업자등록번호 : 102-81-39251</p>
              <p>통신판매신고번호 : 제2006-04168호</p>
              <p className='pc'>대표이사 : 허용석</p>
              <p className='pc'>개인정보관리 책임자 : 이정재</p>
            </li>
            <li>
              <p className='mo'>대표이사 : 허용석</p>
              <p className='mo'>개인정보관리 책임자 : 이정재</p>
            </li>
          </ol>

          <p>Copyright © Hyundai Research Institude. All rights reserved.</p>
        </article>
      </footer>
    </main>
  );
}
