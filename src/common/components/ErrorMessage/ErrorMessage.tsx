import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

export default function ErrorMessage({ children }: PropsWithChildren) {
  return children ? (
    <p
      css={css`
        margin-top: 3px;
        color: #ff5a5a;
        font-size: 12px;
      `}
    >
      {children}
    </p>
  ) : null;
}
