import {css} from '@emotion/react';

export const container = css`
    width: 490px;
    margin: 17px 0 15px;

    & > span {
        display: block;
        width: 100%;

        color: #FF5A5A;
        font-size: 12px;
        font-weight: 400;
        text-align: right;
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

    .radioGroup {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    textarea {
        resize: none;
        padding: 15px;
    }`;

export const terms = css`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    
    li > div:first-of-type {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    li > div:last-of-type {
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
    }
`;

export const cb = css`
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
        transition: all .2s;

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: block;

            width: 10px;
            height: 10px;
            background-color: #1D5CFF;
            border-radius: 50%;
            opacity: 0;
            transition: all .2s;
        }
    }

    input:checked + span {
        border-color: #1D5CFF;

        &:after {
            opacity: 1;
        }
    }
`

export const submit = css`
    width: 270px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px;
    background-color: #1D5CFF;

    color: #fff;
    font-size: 20px;
    font-weight: 600;
`;
