import { css } from '@emotion/react';

import { LAYOUT } from '@/common/constants';

export const appList = css`
  margin: 30px 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
  }

  img {
    height: 130px;
  }

  a {
    height: 50px;
    padding: 0 14px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;

    background-color: #41424e;
    border-radius: 10px;

    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }

  a img {
    height: 24px;
  }

  p {
    line-height: 30px;
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    margin: 30px 0 70px;
    column-gap: 20px;

    img {
      height: 110px;
    }

    a {
      height: 45px;
      column-gap: 8px;

      font-size: 13px;
      font-weight: 500;
    }

    a img {
      height: 20px;
    }
  }
`;
