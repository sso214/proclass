import {ChangeEvent, useState} from "react";
import {Checkbox, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {Modal} from "../Modal";
import './style.scss';
import {ToggleItem} from "../ToggleItem";

type Props = {
    setOpenModal: (open: boolean) => void;
    setOpenSuccessModal: (open: boolean) => void;
}

export default function FormModal(props: Props) {
    const {setOpenModal, setOpenSuccessModal} = props;
    const resetValue = {
        companyName: '',
        numberOfEmployees: '',
        name: '',
        phone: '',
        email: '',
        education: '이러닝(법정의무교육)',
        inquiries: '',
        terms01: false,
        terms02: false,
    };
    const [form, setForm] = useState(resetValue);

    const isButtonDisabled =
        !form.companyName ||
        !form.numberOfEmployees ||
        !form.name ||
        !form.phone ||
        !form.email ||
        !form.education ||
        !form.inquiries ||
        !form.terms01;

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e?.stopPropagation();

        let formValue = {};
        const { name, value } = e?.target;
        const isTerms = name === 'terms01' || name === 'terms02';

        if ('checked' in e?.target && isTerms) {
            const { checked } = e?.target;
            formValue = {[name]: checked};
        } else {
            formValue = {[name]: value};
        }

        setForm((prevState) => ({
            ...prevState,
            ...formValue,
        }));
    }

    const onSubmit = () => {
        console.log(form);
        setOpenModal(false);
        setOpenSuccessModal(true);
    }

    return (
        <Modal setOpenModal={setOpenModal}>
            <form onSubmit={(e) => e?.preventDefault()}>
                <div className='modalHeader'>
                    <h2>프로클래스 도입 문의</h2>
                    <p>프로클래스와 관련하여 궁금한 것이 있다면 무엇이든 물어보세요.</p>
                </div>

                <div className='modalBody'>
                    <div className='modalBodyCont'>
                        <p className='require right'>필수*</p>

                        <table>
                            <colgroup>
                                <col width='15%'/>
                                <col width='85%'/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <th>
                                    회사명
                                    <span> *</span>
                                </th>
                                <td>
                                    <input type='text' name='companyName' autoFocus onChange={onChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    직원수
                                    <span> *</span>
                                </th>
                                <td>
                                    <input type='text' name='numberOfEmployees' onChange={onChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    이름
                                    <span> *</span>
                                </th>
                                <td>
                                    <input type='text' name='name' onChange={onChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    연락처
                                    <span> *</span>
                                </th>
                                <td>
                                    <input type='text' name='phone' onChange={onChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    이메일
                                    <span> *</span>
                                </th>
                                <td>
                                    <input type='text' name='email' onChange={onChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    관심교육
                                    <span> *</span>
                                </th>
                                <td>
                                    <RadioGroup
                                        className='radioGroup'
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="이러닝(법정의무교육)"
                                        name="education"
                                        onChange={onChange}
                                    >
                                        <FormControlLabel value="이러닝(법정의무교육)" control={<Radio/>}
                                                          label="이러닝(법정의무교육)"/>
                                        <FormControlLabel value="마이크로러닝(지식 콘텐츠)" control={<Radio/>}
                                                          label="마이크로러닝(지식 콘텐츠)"/>
                                        <FormControlLabel value="모두" control={<Radio/>} label="모두"/>
                                    </RadioGroup>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    문의내용
                                    <span> *</span>
                                </th>
                                <td>
                                    <textarea name='inquiries' maxLength={150} onChange={onChange} />
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div className='terms'>
                            <ToggleItem
                                clickElement={
                                    <FormControlLabel
                                        control={<Checkbox name='terms01' onChange={onChange} />}
                                        label={<>개인정보 수집 및 이용 동의 <span className='red'>(필수)</span></>} />
                                }
                                toggleElement={
                                    <div>
                                        <h5>개인정보 수집 및 이용 동의 (필수) </h5>
                                        <p>
                                            개인정보 수집 및 이용목적과, 수집하는 개인정보의 항목, 개인정보의 보유기간을 안내합니다.<br />
                                            본 개인정보는 개인정보처리방침에 근거하여 관리됩니다.
                                        </p>
                                        <p>
                                            (1) 수집 및 이용목적 : 문의 내역에 대한 상담 접수 및 처리<br />
                                            (2) 수집 항목 : 회사명, 직원수, 이름, 이메일, 연락처, 문의사항<br />
                                            (3) 보유 기간 : 수집 및 이용 동의일로부터 12개월
                                        </p>
                                    </div>
                                }
                            />

                            <ToggleItem
                                clickElement={
                                    <FormControlLabel
                                        control={<Checkbox name='terms02' onChange={(e) => {}} />}
                                        label={<>마케팅 수신 동의 <span className='red'>(선택)</span></>} />
                                }
                                toggleElement={
                                    <div>
                                        <h5>마케팅 수신 동의 (선택) </h5>
                                        <p>
                                            본 마케팅 정보 수신에 대한 동의를 거부하실 수 있으며,<br />
                                            동의자에 한해 각종 프로모션, 서비스 업데이트 소식 등을 전합니다.
                                        </p>
                                        <p>
                                            (1) 수집 및 이용목적 : 프로클래스 서비스 마케팅 정보 제공<br />
                                            (2) 수집 항목 : 회사명, 이름, 연락처, 이메일<br />
                                            (3) 보유 기간 : 수신 동의일로부터 12개월
                                        </p>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className='modalFooter'>
                    <button type='submit' disabled={isButtonDisabled} onClick={onSubmit}>문의하기</button>
                </div>
            </form>
        </Modal>
    )
}
