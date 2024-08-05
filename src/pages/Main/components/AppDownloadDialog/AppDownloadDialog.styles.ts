import { css } from '@emotion/react';

export const container = css`
  padding: 42px 110px 100px;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    color: #090909;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
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

    background-color: #41424E;
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
