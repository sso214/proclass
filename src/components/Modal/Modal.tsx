import React, {useEffect} from 'react';
import {publicUrl} from "../../util";
import './style.scss';

type Props = {
    setOpenModal: (open: boolean) => void;
    children: React.ReactNode;
}
export default function FormModal(props: Props) {
    const { setOpenModal, children } = props;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);

    return (
        <>
            <div className='modalBackground' onClick={() => setOpenModal(false)}></div>
            <div className='modalContent'>
                <button className='modalClose' type='button' onClick={() => setOpenModal(false)}>
                    <img src={publicUrl('/image/close.png')} alt='close'/>
                </button>
                {children}
            </div>
        </>
    )
}
