import {css} from '@emotion/react';
import {LAYOUT} from '@/common/constants/style';

export const wrapper = css`
    position: relative;
    z-index: 999;
    
    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 40px;

    @media (max-width: ${LAYOUT.mo.size}) {
        border-radius: 20px;
        max-width: 90%;
    }
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

    @media (max-width: ${LAYOUT.mo.size}) {
        top: 15px;
        right: 15px;
        
        width: 30px;
        height: 30px;
        background-size: 20px;
    }
`;

export const header = css`
    min-height: 120px;
    padding: 42px 0 22px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 8px;
    flex: none;
    
    text-align: center;
    
    h3 {
        color: #090909;
        font-size: 24px;
        font-weight: 700;
    }
    
    p {
        color: #525252;
        font-size: 20px;
        font-weight: 400;
    }

    @media (max-width: ${LAYOUT.mo.size}) {
        min-height: 100px;
        padding: 20px 0;
        text-align: center;

        h3 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }
    }
`;


export const container = css`
    max-height: 600px;
    height: 10%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const footer = css`
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: none;
`;
