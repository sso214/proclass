import { css } from '@emotion/react';

export const wrapper = css`
  position: relative;
  z-index: 999;
  display: inline-block;
  
  background-color: #fff;
  border-radius: 40px;
`;

export const closeButton = css`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url('/images/close.png') no-repeat center;
  background-size: 30px;
`;
