import { css } from '@emotion/react';

export const container = css`
  width: 800px;
  height: 900px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const title = css`
  padding: 43px 0 39px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  text-align: center;
  
  h2 {
    color: #090909;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
  
  p {
    color: #525252;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
`;

export const form = css`
  width: 490px;
  
  table {
    width: 100%;
  }
  
  th,
  td {
    padding: 9px 0;
  }
  
  th {
    color: #090909;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
  }
  
  th span {
    color: #FF5A5A;
  }
  
  input[type='text'],
  textarea {
    width: 100%;
    height: 36px;
    padding: 0 15px;
    
    border: 1px solid #bebebe;
    border-radius: 6px;
    
    color: #000;
    font-size: 15px;
    font-weight: 400;
    
    outline: none;
  }
  
  textarea {
    resize: none;
    padding: 15px;
  }
  
  button[type='submit'] {
    width: 270px;
    height: 60px;
    margin: 56px auto 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 20px;
    background-color: #1D5CFF;
    
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
`;
