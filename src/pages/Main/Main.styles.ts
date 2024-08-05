import { css } from '@emotion/react';

const MAX_WIDTH = '1038px';
const HEADER_HEIGHT = '100px';

export const wrapper = css`
`;

export const header = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: #181818;

  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    width: ${MAX_WIDTH};
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #DADADA;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    
    svg {
      height: 36px;
    }
  }
`;

export const container = css`
  padding-top: ${HEADER_HEIGHT};
  
  section,
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  article {
    width: ${MAX_WIDTH};
    //border: 1px solid red;
  }
`;

export const title = css`
  color: #272727;
  font-size: 45px;
  font-weight: 700;
  line-height: 63px;
  text-align: center;
`;

export const section01 = css`
  position: relative;
  padding: 220px 0;

  background: url("/images/section01-bg.jpg") no-repeat center;
  background-size: cover;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(rgba(0, 5, 22, 0.6), rgba(0, 5, 24, 0.6));
  }

  article {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: #fff;
    font-size: 70px;
    font-weight: 700;
    line-height: 91px;
  }

  p {
    margin-top: 30px;
    color: #C4C4C4;
    font-size: 26px;
    font-weight: 400;
    line-height: 39px;
  }

  a {
    width: 306px;
    height: 99px;
    margin-top: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(to right, #1D5CFF, #4046FF, #652FFF);
    border-radius: 23px;

    color: #fff;
    font-size: 28px;
    font-weight: 500;
    line-height: 43px;
  }
`;

export const section02 = css`
  padding: 237px 0;
  background-color: #F8F9FA;
  text-align: center;

  span {
    color: #5377FF;
    font-weight: 800;
  }
`;

export const section03 = css`
  padding: 120px 0;
  row-gap: 80px;
  
  .title {
    margin-bottom: 80px;
    text-align: center;
    
    img {
      height: 65px;
    }
    svg {
      height: 67px;
      margin-bottom: 10px;
    }
  }
  
  .worryList {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 80px;
    }
    
    li > div {
      width: 310px;
      position: relative;
      padding: 45px 0 40px;
      border-radius: 20px;
      
      & > span {
        position: absolute;
        top: 30px;
        left: 30px;

        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        color: #fff;
        font-size: 24px;
        font-weight: 700;
        line-height: 31px;
      }
      
      img {
        height: 110px;
        margin-bottom: 17px;
        display: inline-block;
      }
      
      h4 {
        color: #333;
        font-size: 24px;
        font-weight: 500;
        line-height: 33px;
      }
      
      h4 span {
        font-weight: 700;
      }
    }
    
    li > span {
      display: flex;
      flex-direction: column;
      row-gap: 40px;
      
      i {
        width: 20px;
        height: 20px;
        display: block;
        border-radius: 50%;
        
        &:nth-of-type(1) {opacity: 1}
        &:nth-of-type(2) {opacity: 0.8}
        &:nth-of-type(3) {opacity: 0.6}
        &:nth-of-type(4) {opacity: 0.4}
        &:nth-of-type(5) {opacity: 0.2}
      }
    }
  }
  
  .solutionList {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    
    li {
      width: 310px;
      padding: 37px 0;

      background-color: #F5F5F5;
      border-radius: 20px;
    }

    span {
      width: 50px;
      height: 50px;
      margin-bottom: 20px;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      background-color: #5377FF;
      border-radius: 50%;

      color: #fff;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    }

    p {
      color: #000;
      font-size: 24px;
      font-weight: 600;
      line-height: 34px;
    }
  }
  
  .guide {
    position: relative;
    height: 55px;
    padding: 0 17px 0 15px;
    margin-top: 37px;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    background-color: #ECF6FF;
    border-radius: 10px;
    
    color: #1D5CFF;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      margin-top: -15px;
      left: 50%;
      transform: translate(-50%);

      width: 0;
      height: 0;
      border-bottom: calc( 10px * 1.732 ) solid #ECF6FF;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  }
`;

export const section04 = css`
  padding: 101px 0;
  text-align: center;
  background: linear-gradient(to right, #3F80FF, #A88AFF);
  
  color: #fff;
  font-size: 35px;
  font-weight: 700;
  line-height: 49px;
`;

export const section05 = css`
  article {
    padding: 120px 0;
    text-align: center;
  }
  
  .title {
    margin-bottom: 100px;

    span {
      height: 68px;
      padding: 0 36px;
      margin-bottom: 50px;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      border-radius: 50px;
      font-size: 28px;
      font-weight: 700;
    }
  }
  
  .mockupList {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img {
      width: 450px;
    }
    
    p {
      margin-top: 20px;
      color: #333;
      font-size: 30px;
      font-weight: 500;
      line-height: 42px;
    }
  }
  
  .processList {
    display: flex;
    flex-direction: column;
    row-gap: 100px;
    
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    div {
      width: 400px;
      text-align: center;
    }
    
    img {
      height: 200px;
    }
    
    h5 {
      margin-top: 50px;
      color: #272727;
      font-size: 30px;
      font-weight: 700;
      line-height: 39px;
    }
    
    p {
      margin-top: 20px;
      color: #525252;
      font-size: 28px;
      font-weight: 400;
      line-height: 39px;
    }
    
    span {
      display: flex;
      align-items: center;
      column-gap: 40px;
    }
    
    i {
      width: 20px;
      height: 20px;
      
      background-color: #A3B7FF;
      border-radius: 50%;
      
      &:nth-of-type(1) {opacity: 1}
      &:nth-of-type(2) {opacity: 0.8}
      &:nth-of-type(3) {opacity: 0.6}
      &:nth-of-type(4) {opacity: 0.4}
    }
  }
`;

export const section06 = css`
  padding: 120px 0;
  background-color: #F3FBFF;
  
  .title {
    margin-bottom: 100px;
    text-align: center;
    
    span {
      height: 56px;
      padding: 0 30px;
      margin-bottom: 30px;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      background-color: #01BF9D;
      border-radius: 100px;

      color: #fff;
      font-size: 28px;
      font-weight: 700;
    }
  }
  
  .giftList {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    img {
      height: 200px;
    }

    h5 {
      margin-top: 40px;
      color: #272727;
      font-size: 30px;
      font-weight: 700;
      line-height: 39px;
    }

    p {
      margin-top: 20px;
      color: #525252;
      font-size: 28px;
      font-weight: 400;
      line-height: 39px;
    }
  }
  
  .guideList {
    margin-top: 100px;
    padding: 38px 30px 38px 60px;
    display: flex;
    flex-direction: column;
    
    background-color: #E4EEF5;
    border-radius: 20px;
    list-style: outside disc;
    
    li {
      color: #4C5B72;
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
    }
  }
`;

export const section07 = css`
  padding: 97px 0;
  background: linear-gradient(to right, #1D5CFF, #411AAF);
  
  h2 {
    color: #fff;
  }
  
  div {
    margin: 40px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 28px;
  }
  
  a {
    height: 100px;
    padding: 0 63px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #181818;
    border-radius: 23px;
    
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    
    &:last-of-type {
      background-color: #fff;
      color: #1D5CFF;
    }
  }
`;

export const footer = css`
  padding: 65px 0;
  background-color: #181818;
  
  article > div {
    display: flex;
    align-items: center;
    column-gap: 40px;
    
    svg {
      height: 30px;
    }
    
    ol {
      display: flex;
      align-items: center;
      column-gap: 20px;
      
      color: #8F8F8F;
      font-size: 14px;
      font-weight: 600;
    }
  }

  article  > ol {
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    
    color: #525252;
    font-size: 12px;
    font-weight: 500;
    
    li {
      display: flex;
      align-items: center;
      column-gap: 16px;
    }
  }
  
  article > p {
    margin-top: 10px;
    
    color: #525252;
    font-size: 12px;
    font-weight: 500;
  }
`;
