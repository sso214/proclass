import { Dialog } from '@/common/components';
import { useDialog } from '@/common/hooks';
import * as S from './SuccessDialog.styles';

export default function SuccessDialog() {
  const { onDismiss } = useDialog();

  return (
    <Dialog>
      <div css={S.container}>
        <img src='/images/form-success.png' alt='프로클래스 도입 문의 완료' />
        <h2>프로클래스 도입 문의 완료</h2>
        <p>
          문의 내용이 정상적으로 접수됐습니다.<br/>
          빠른 시일 내에 답변드리겠습니다.<br/>
          감사합니다.
        </p>
        <button type='button' onClick={onDismiss}>확인</button>
      </div>
    </Dialog>
  )
}
