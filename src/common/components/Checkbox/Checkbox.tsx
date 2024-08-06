import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './Checkbox.styles';

const Checkbox = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ id, children, ...res }, ref) => {
    return (
      <label htmlFor={id} css={S.checkbox}>
        <input ref={ref} type='checkbox' {...res} />
        <span />
        {children}
      </label>
    );
  },
);

Checkbox.displayName = 'Radio';
export default Checkbox;
