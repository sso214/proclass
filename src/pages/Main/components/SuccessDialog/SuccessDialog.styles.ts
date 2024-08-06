import { css } from '@emotion/react';

export const container = css`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    height: 100px;
  }

  h2 {
    margin-top: 10px;
    color: #090909;
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
  }

  p {
    margin-top: 19px;
    color: #525252;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
  }

  button {
    margin-top: 50px;
    width: 270px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #1d5cff;
    border-radius: 20px;

    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }

  ul {
    margin-top: 72px;
    display: flex;
    align-items: center;
    column-gap: 50px;
  }

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
`;
