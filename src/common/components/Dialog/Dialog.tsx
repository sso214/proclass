import {useDialog} from '@/common/hooks';
import * as S from './Dialog.styles';
import type {DialogProps} from './Dialog.types';

export default function Dialog({
                                   title,
                                   subTitle,
                                   contents,
                                   footer,
                                   ...res
                               }: DialogProps) {
    const {onDismiss} = useDialog();

    return (
        <div css={S.wrapper} {...res}>
            <button css={S.closeButton} type='button' onClick={onDismiss}/>
            {(title || subTitle) && (
                <div css={S.header}>
                    {title && <h3>{title}</h3>}
                    {subTitle && <p>{subTitle}</p>}
                </div>
            )}
            <div css={S.container}>
                {contents}
            </div>
            {footer && (
                <div css={S.footer}>{footer}</div>
            )}
        </div>
    )
}
