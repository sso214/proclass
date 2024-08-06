import { ReactNode, useState } from 'react';
import * as S from './ToggleBlock.styles';

type ToggleBlockProps = {
  view?: ReactNode;
  contents?: ReactNode;
};

export default function ToggleBlock({ view, contents }: ToggleBlockProps) {
  const [open, setOpen] = useState(false);
  return (
    <div css={S.wrapper}>
      <div css={S.view} className={open ? 'active' : ''}>
        <div>{view}</div>
        <img src='/proclass/images/arrow.png' alt='toggle' onClick={() => setOpen((prevState) => !prevState)} />
      </div>
      {open && <div css={S.contents}>{contents}</div>}
    </div>
  );
}
