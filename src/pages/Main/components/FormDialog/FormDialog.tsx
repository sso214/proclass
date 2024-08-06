import { Dialog } from '@/common/components';
import { useDialog } from '@/common/hooks';
import { SuccessDialog } from '../SuccessDialog';
import * as S from './FormDialog.styles';

export default function FormDialog() {
  const { onPresent, onDismiss } = useDialog();
  const openSuccessDialog = () => onPresent(<SuccessDialog />);

  return (
      <Dialog
          style={{width: 800}}
          title='프로클래스 도입 문의'
          subTitle='프로클래스와 관련하여 궁금한 것이 있다면 무엇이든 물어보세요.'
          contents={
            <div css={S.container}>
              <span>필수*</span>
              <table css={S.table}>
                <tbody>
                <tr>
                  <th>회사명 <span>*</span></th>
                  <td>
                    <input type='text' autoFocus />
                  </td>
                </tr>
                <tr>
                  <th>직원수 <span>*</span></th>
                  <td>
                    <input type='text'/>
                  </td>
                </tr>
                <tr>
                  <th>이름 <span>*</span></th>
                  <td>
                    <input type='text'/>
                  </td>
                </tr>
                <tr>
                  <th>연락처 <span>*</span></th>
                  <td>
                    <input type='text'/>
                  </td>
                </tr>
                <tr>
                  <th>이메일 <span>*</span></th>
                  <td>
                    <input type='text'/>
                  </td>
                </tr>
                <tr>
                  <th>관심교육 <span>*</span></th>
                  <td>
                    <div className='radioGroup'>
                      {['이러닝(법정의무교육)', '마이크로러닝(지식 콘텐츠)', '모두'].map((v, index) => (
                          <div css={S.cb} key={v}>
                            <input type='radio' name='education' defaultChecked={index === 0} />
                            <span/>
                            <p>{v}</p>
                          </div>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>문의내용 <span>*</span></th>
                  <td>
                  <textarea maxLength={150}></textarea>
                  </td>
                </tr>
                </tbody>
              </table>
              <ul css={S.terms}>
                <li>
                  <div>
                    <div css={S.cb}>
                      <input type='checkbox'/>
                      <span/>
                      <p>개인정보 수집 및 이용 동의 <span>필수</span></p>
                    </div>
                  </div>
                  <div>
                    <h5>개인정보 수집 및 이용 동의 (필수)</h5>
                    <p>
                      개인정보 수집 및 이용목적과, 수집하는 개인정보의 항목, 개인정보의 보유기간을 안내합니다.<br/>
                      본 개인정보는 개인정보처리방침에 근거하여 관리됩니다.
                    </p>
                    <ul>
                      <li>(1) 수집 및 이용목적 : 문의 내역에 대한 상담 접수 및 처리</li>
                      <li>(2) 수집 항목 : 회사명, 직원수, 이름, 이메일, 연락처, 문의사항</li>
                      <li>(3) 보유 기간 : 수집 및 이용 동의일로부터 12개월</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <div css={S.cb}>
                      <input type='checkbox'/>
                      <span/>
                      <p>마케팅 수신 동의<span>(선택)</span></p>
                    </div>
                  </div>
                  <div>
                    <h5>마케팅 수신 동의 (선택) </h5>
                    <p>
                      본 마케팅 정보 수신에 대한 동의를 거부하실 수 있으며,<br/>
                      동의자에 한해 각종 프로모션, 서비스 업데이트 소식 등을 전합니다.
                    </p>
                    <ul>
                      <li>(1) 수집 및 이용목적 : 프로클래스 서비스 마케팅 정보 제공</li>
                      <li>(2) 수집 항목 : 회사명, 이름, 연락처, 이메일</li>
                      <li>(3) 보유 기간 : 수신 동의일로부터 12개월</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          }
          footer={
            <button type='submit' css={S.submit}>문의하기</button>
          }
      />
  )
}
