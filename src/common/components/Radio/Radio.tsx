import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './Radio.styles';

const Radio = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ id, children, ...res }, ref) => {
  return (
    <label htmlFor={id} css={S.radio}>
      <input ref={ref} type='radio' {...res} />
      <span />
      {children}
    </label>
  );
});

Radio.displayName = 'Radio';
export default Radio;
