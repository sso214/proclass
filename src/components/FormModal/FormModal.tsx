import './style.scss';
import {useState} from "react";

const FORM_LIST = [
    {
        text: '회사명',
        types: ['text'],
        name: 'companyName',
        required: true
    },
    {
        text: '직원수',
        types: ['text'],
        name: 'numberOfEmployees',
        required: true
    },
    {
        text: '이름',
        types: ['text'],
        name: 'name',
        required: true
    },
    {
        text: '연락처',
        types: ['text'],
        name: 'phone',
        required: true
    },
    {
        text: '이메일',
        types: ['text'],
        name: 'email',
        required: true
    },
    {
        text: '관심교육',
        types: ['radio', 'radio', 'radio'],
        name: 'education',
        required: true
    },
    {
        text: '문의내용',
        types: ['textarea'],
        name: 'inquiries',
        required: true
    },
]

export default function FormModal() {
    const [] = useState();

    return (
        <div>
            <button type='button'>close</button>

            <div>
                <h2>프로클래스 도입 문의</h2>
                <p>프로클래스와 관련하여 궁금한 것이 있다면 무엇이든 물어보세요.</p>
            </div>

            <p>필수*</p>

            <form>
                <table>
                    {FORM_LIST.map(({text, name, types, required}) => (
                        <tr key={text}>
                            <th>
                                <label htmlFor={name}>{text}</label>
                                {required && <span>*</span>}
                            </th>
                            <td>
                                {types.map((type) => (
                                    <>
                                        {type === 'text' && <input type={type} name={name}/>}
                                        {type === 'radio' && (
                                            <div>
                                        <span>
                                            <input type={type} id={name} name={name}/>
                                            이러닝(법정의무교육)
                                        </span>
                                                <span>
                                            <input type={type} id={name} name={name}/>
                                            마이크로러닝(지식 콘텐츠)
                                        </span>
                                                <span>
                                            <input type={type} id={name} name={name}/>
                                            모두
                                        </span>
                                            </div>
                                        )}
                                        {type === 'textarea' && <textarea id={name} name={name} />}
                                    </>
                                ))}
                            </td>
                        </tr>
                    ))}
                </table>

                <ul>
                    <li>
                        <div>
                            <input type='checkbox' />
                            개인정보 수집 및 이용 동의 <span>(필수)</span>
                        </div>
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
                    </li>
                    <li>
                        <div>
                            <input type='checkbox' />
                            마케팅 수신 동의 <span>(필수)</span>
                        </div>
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
                    </li>
                </ul>

                <button type='submit'>문의하기</button>
            </form>
        </div>
    )
}
