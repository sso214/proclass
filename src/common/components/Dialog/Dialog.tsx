import { PropsWithChildren } from 'react';
import { useDialog } from '@/common/hooks';
import * as S from './Dialog.styles';

export default function Dialog({ children }: PropsWithChildren){
  const { onDismiss } = useDialog();

  return (
    <div css={S.wrapper}>
      <button css={S.closeButton} type='button' onClick={onDismiss} />
      {children}
    </div>
  )
}
