import { Dialog } from '@/common/components';
import { useDialog } from '@/common/hooks';
import { SuccessDialog } from '../SuccessDialog';
import * as S from './FormDialog.styles';

export default function FormDialog() {
  const { onPresent, onDismiss } = useDialog();
  const openSuccessDialog = () => onPresent(<SuccessDialog />);

  return (
    <Dialog>
      <div css={S.container}>
        <div css={S.title}>
          <h2>프로클래스 도입 문의</h2>
          <p>프로클래스와 관련하여 궁금한 것이 있다면 무엇이든 물어보세요.</p>
        </div>

        <span>필수*</span>
        <form css={S.form}>
          <table>
          <tbody>
            <tr>
              <th>회사명 <span>*</span></th>
              <td>
                <input type='text' />
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
              <td></td>
            </tr>
            <tr>
              <th>문의내용 <span>*</span></th>
              <td>
                <textarea></textarea>
              </td>
            </tr>
            </tbody>
          </table>
          <ul>
            <li>
              개인정보 수집 및 이용 동의 <span>필수</span>
            </li>
            <li>
              마케팅 수신 동의 <span>선택</span>
            </li>
          </ul>
          <button type='submit'>문의하기</button>
        </form>
      </div>
    </Dialog>
  )
}
