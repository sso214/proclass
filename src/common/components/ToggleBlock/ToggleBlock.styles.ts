import { css } from '@emotion/react';

export const wrapper = css``;

export const view = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 20px;
    cursor: pointer;
  }

  &.active {
    img {
      rotate: 180deg;
    }
  }
`;

export const contents = css`
  margin-top: 20px;
  padding: 18px 15px;
  border: 1px solid #bbb;
  color: #333;

  h5 {
    margin-bottom: 8px;
    color: #090909;
    font-size: 13px;
    font-weight: 500;
  }

  p {
    margin-bottom: 6px;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
  }

  ul {
    font-size: 11px;
    font-weight: 400;
    line-height: 17px;
  }
`;
