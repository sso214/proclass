import { css } from '@emotion/react';
import { LAYOUT } from '@/common/constants';

export const container = css`
  position: relative;
  width: 95%;
  max-width: 490px;
  margin: 17px 0 15px;

  & > span {
    display: block;
    width: 100%;

    color: #ff5a5a;
    font-size: 12px;
    font-weight: 400;
    text-align: right;
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    margin: 10px 0;

    & > span {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const table = css`
  width: 100%;
  margin-top: 13px;

  th,
  td {
    padding: 9px 0;
    font-size: 14px;
  }

  th {
    width: 20%;
    color: #090909;
    font-weight: 600;
    text-align: left;
    vertical-align: top;
  }

  th span {
    color: #ff5a5a;
  }

  input[type='text'],
  input[type='number'],
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

    &:focus {
      box-shadow: 0 0 0 2px rgba(29, 92, 255, 0.3);
    }
  }

  .radioGroup {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  textarea {
    resize: none;
    padding: 15px;
  }

  @media (max-width: ${LAYOUT.mo.size}) {
    margin-top: 0;

    tr {
      display: flex;
      flex-direction: column;
    }

    th,
    td {
      width: 100%;
      padding: 8px 0 20px;
    }

    th {
      padding: 0;
    }

    .radioGroup {
      justify-content: flex-start;
      flex-wrap: wrap;
      row-gap: 8px;
      column-gap: 20px;
    }
  }
`;

export const terms = css`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  font-size: 14px;
  font-weight: 600;

  span {
    color: #ff5a5a;
  }
`;

export const submit = css`
  width: 270px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  background-color: #1d5cff;

  color: #fff;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: ${LAYOUT.mo.size}) {
    width: 100%;
    height: 55px;

    border-radius: 16px;
    font-size: 18px;
  }
`;
