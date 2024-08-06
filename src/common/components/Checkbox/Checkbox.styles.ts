import { css } from '@emotion/react';

export const checkbox = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  column-gap: 7px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }

  input + span {
    position: relative;
    width: 20px;
    height: 20px;

    display: block;
    border: 1px solid #aaa;
    border-radius: 50%;
    transition: all 0.2s;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;

      width: 10px;
      height: 10px;
      background-color: #1d5cff;
      border-radius: 50%;
      opacity: 0;
      transition: all 0.2s;
    }
  }

  input:checked + span {
    border-color: #1d5cff;

    &:after {
      opacity: 1;
    }
  }
`;
