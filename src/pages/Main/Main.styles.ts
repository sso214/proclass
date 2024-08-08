import { css } from '@emotion/react';

import { LAYOUT } from '@/common/constants';

export const wrapper = css`
  section,
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  article {
    width: ${LAYOUT.pc.max_width};
  }

  .pc {
    display: block;
  }
  .mo {
    display: none;
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    article {
      width: ${LAYOUT.mo.max_width};
    }

    .mo {
      display: block;
    }
    .pc {
      display: none;
    }
  }
`;

export const header = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  height: ${LAYOUT.pc.header_height};
  background-color: #181818;

  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    width: ${LAYOUT.pc.max_width};
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    height: 36px;
  }

  a,
  button {
    color: #dadada;
    font-size: 20px;
    font-weight: 700;
    transition: all 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    height: ${LAYOUT.mo.header_height};

    nav {
      width: 95%;
    }

    svg {
      height: 32px;
    }

    a.mo,
    button {
      height: 40px;
      padding: 0 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #5377ff;
      border-radius: 10px;

      color: #fff;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const container = css`
  padding-top: ${LAYOUT.pc.header_height};

  @media (max-width: ${LAYOUT.mo.size}) {
    padding-top: ${LAYOUT.mo.header_height};
  }
`;

export const title = css`
  color: #272727;
  font-size: 45px;
  font-weight: 700;
  line-height: 58px;
  text-align: center;

  @media (max-width: ${LAYOUT.mo.size}) {
    font-size: 30px;
    line-height: 43px;
  }
`;

export const section01 = css`
  position: relative;
  padding: 220px 0;

  background: url('/proclass/images/section01-bg.jpg') no-repeat center;
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
    color: #c4c4c4;
    font-size: 26px;
    font-weight: 400;
    line-height: 39px;
  }

  button {
    width: 306px;
    height: 99px;
    margin-top: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(to right, #1d5cff, #4046ff, #652fff);
    border-radius: 23px;

    color: #fff;
    font-size: 28px;
    font-weight: 500;
    line-height: 43px;
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    padding: 130px 0 110px;

    h1 {
      font-size: 40px;
      line-height: 56px;
    }

    p {
      margin-top: 15px;
      font-size: 15px;
      line-height: 23px;
    }

    button {
      width: 215px;
      height: 62px;

      border-radius: 13px;
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const section02 = css`
  padding: 237px 0;
  background-color: #f8f9fa;
  text-align: center;

  span {
    color: #5377ff;
    font-weight: 800;
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    padding: 104px 0;
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

        &:nth-of-type(1) {
          opacity: 1;
        }

        &:nth-of-type(2) {
          opacity: 0.8;
        }

        &:nth-of-type(3) {
          opacity: 0.6;
        }

        &:nth-of-type(4) {
          opacity: 0.4;
        }

        &:nth-of-type(5) {
          opacity: 0.2;
        }
      }
    }
  }

  .solutionList {
    display: flex;
    justify-content: space-between;
    text-align: center;

    li {
      position: relative;
      width: 310px;
      padding: 37px 0;

      background-color: #f5f5f5;
      border-radius: 20px;

      span {
        width: 50px;
        height: 50px;
        margin-bottom: 20px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        background-color: #5377ff;
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
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    padding: 100px 0;
    row-gap: 60px;

    .title {
      margin-bottom: 50px;

      img,
      svg {
        height: 56px;
      }
    }

    .worryList {
      flex-direction: column;
      justify-content: center;
      row-gap: 30px;

      li {
        row-gap: 60px;
      }

      li > div {
        padding: 45px 0;

        h4 {
          font-size: 22px;
          line-height: 31px;
        }
      }

      li:not(:last-of-type) > span {
        display: none;
      }

      li > span {
        row-gap: 30px;

        i {
          width: 14px;
          height: 14px;
        }
      }
    }

    .solutionList {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 40px;

      li {
        padding: 37px 0 49px;

        p {
          font-size: 22px;
          line-height: 31px;
        }
      }
    }
  }
`;

export const section04 = css`
  padding: 101px 0;
  text-align: center;
  background: linear-gradient(to right, #3f80ff, #a88aff);

  color: #fff;
  font-size: 35px;
  font-weight: 700;
  line-height: 49px;

  @media (max-width: ${LAYOUT.mo.size}) {
    padding: 133px 0;
    font-size: 24px;
    line-height: 38px;
  }
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
      position: relative;
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
      position: absolute;
      top: 85px;
      left: 50%;
      transform: translateX(-50%);

      display: flex;
      align-items: center;
      column-gap: 40px;
    }

    i {
      width: 20px;
      height: 20px;

      background-color: #a3b7ff;
      border-radius: 50%;

      &:nth-of-type(1) {
        opacity: 1;
      }

      &:nth-of-type(2) {
        opacity: 0.8;
      }

      &:nth-of-type(3) {
        opacity: 0.6;
      }

      &:nth-of-type(4) {
        opacity: 0.4;
      }
    }
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    article {
      padding: 100px 0;
    }

    .title {
      margin-bottom: 60px;

      span {
        height: 42px;
        padding: 0 20px;
        margin-bottom: 30px;
        font-size: 17px;
      }
    }

    .mockupList {
      flex-direction: column;
      justify-content: center;
      row-gap: 50px;

      img {
        width: 300px;
      }

      p {
        margin-top: 0;
        font-size: 20px;
        line-height: 28px;
      }
    }

    .processList {
      li {
        flex-direction: column;
        justify-content: center;
        row-gap: 40px;
      }

      div {
        width: 100%;
      }

      img {
        height: 150px;
      }

      h5 {
        margin-top: 30px;
        font-size: 26px;
        line-height: 33px;
      }

      p {
        margin-top: 10px;
        font-size: 22px;
        line-height: 31px;
      }

      span {
        position: initial;
        flex-direction: column;
        justify-content: center;
        column-gap: 0;
        row-gap: 30px;
      }

      i {
        width: 14px;
        height: 14px;

        &:nth-of-type(4) {
          display: none;
        }
      }
    }
  }
`;

export const section06 = css`
  padding: 120px 0;
  background-color: #f3fbff;

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

      background-color: #01bf9d;
      border-radius: 100px;

      color: #fff;
      font-size: 28px;
      font-weight: 700;
    }
  }

  .giftList {
    position: relative;
    left: -10px;
    max-width: 946px;
    margin: 0 auto;

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

    background-color: #e4eef5;
    border-radius: 20px;
    list-style: outside disc;

    li {
      color: #4c5b72;
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
    }
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    padding: 100px 0 50px;

    .title {
      margin-bottom: 60px;

      span {
        height: 42px;
        padding: 0 20px;

        border-radius: 50px;
        font-size: 17px;
      }
    }

    .giftList {
      position: initial;
      flex-direction: column;
      justify-content: center;
      row-gap: 50px;

      img {
        height: 150px;
      }

      h5 {
        margin-top: 30px;
        font-size: 26px;
        line-height: 34px;
      }

      p {
        margin-top: 10px;
        font-size: 22px;
        line-height: 31px;
      }
    }

    .guideList {
      width: 80%;
      margin: 60px auto 0;
      padding: 30px 14px 30px 45px;

      li {
        font-size: 16px;
        line-height: 27px;
      }
    }
  }
`;

export const section07 = css`
  padding: 97px 0;
  background: linear-gradient(to right, #1d5cff, #411aaf);

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

  a,
  button {
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
      color: #1d5cff;
    }
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    padding: 110px 0 105px;

    div {
      margin: 30px auto 0;
      column-gap: 17px;
    }

    a.mo,
    button {
      display: flex;
      height: 64px;
      padding: 0 38px;

      border-radius: 13px;
      font-size: 20px;
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

      color: #8f8f8f;
      font-size: 14px;
      font-weight: 600;
    }
  }

  article > ol {
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

  @media (max-width: ${LAYOUT.mo.size}) {
    padding: 40px 0;

    article {
      padding: 0 7.5%;
    }

    article > div {
      padding-bottom: 30px;
      justify-content: space-between;
      column-gap: 0;
      border-bottom: 1px solid #2f2f2f;

      ol {
        column-gap: 10px;
        font-size: 12px;
        font-weight: 500;
      }
    }

    article > ol {
      margin-top: 23px;
      font-size: 10px;
      font-weight: 400;
    }

    article > p {
      margin-top: 23px;
      font-size: 10px;
      font-weight: 400;
    }
  }
`;
