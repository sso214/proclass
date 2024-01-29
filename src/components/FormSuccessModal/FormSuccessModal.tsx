import React from "react";
import {Modal} from "../Modal";
import {publicUrl} from "../../util";
import './style.scss';

type Props = {
    setOpenModal: (open: boolean) => void;
}

export default function FormSuccessModal(props: Props){
    const {setOpenModal} = props;

    return(
        <Modal setOpenModal={setOpenModal}>
            <div className='formSuccessModal'>
                <div className='contents'>
                    <img src={publicUrl('/image/modal-success.png')} alt='프로클래스 도입 문의 완료' />
                    <h2>프로클래스 도입 문의 완료</h2>
                    <p>
                        문의 내용이 정상적으로 접수됐습니다.<br />
                        빠른 시일 내에 답변드리겠습니다.<br />
                        감사합니다.
                    </p>

                    <button onClick={() => setOpenModal(false)}>
                        확인
                    </button>
                </div>
            </div>
        </Modal>
    )
}
