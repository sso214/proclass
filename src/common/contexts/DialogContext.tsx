import {
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useEffect,
  useState,
  ReactElement,
  ReactNode,
  PropsWithChildren,
  useMemo,
} from 'react';

import { css, keyframes } from '@emotion/react';

const fade = keyframes`
  0% {
    opacity: 0;
    display: none
  }
  100% {
    opacity: 1;
    display: flex
  }
`;
const dialogWrapper = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const dialogBackdrop = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
  animation: ${fade} ease-in-out 0.3s forwards;
`;

type DialogContextValue = {
  content?: ReactNode;
  isOpen?: boolean;
  onPresent: (content: ReactNode, closeOnBackdropClick?: boolean, key?: string) => void;
  onDismiss: () => void;
};
export const DialogContext = createContext<DialogContextValue>({
  onPresent: () => {},
  onDismiss: () => {},
});

export function DialogProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCloseOnBackdropClick, setIsCloseOnBackdropClick] = useState(false);
  const [content, setContent] = useState<ReactNode>();

  const onPresent = useCallback((dialogContent: ReactNode, closeOnBackdropClick?: boolean) => {
    setContent(dialogContent);
    setIsOpen(true);
    setIsCloseOnBackdropClick(closeOnBackdropClick || false);
  }, []);

  const onDismiss = useCallback(() => {
    setContent(null);
    setIsOpen(false);
    setIsCloseOnBackdropClick(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `top: -${window.scrollY}px`;
    }
    return () => {
      document.body.style.cssText = `top: 0`;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscEvt = (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onDismiss();
      }
    };
    window.addEventListener('keydown', handleEscEvt);
    return () => {
      window.removeEventListener('keydown', handleEscEvt);
    };
  }, [onDismiss]);

  const contextValue = useMemo(
    () => ({
      content,
      isOpen,
      onPresent,
      onDismiss,
    }),
    [content, isOpen, onPresent, onDismiss],
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      {isOpen && (
        <div css={dialogWrapper}>
          <div css={dialogBackdrop} onClick={() => isCloseOnBackdropClick && onDismiss()} />
          {isValidElement(content) && cloneElement(content as ReactElement, { onDismiss })}
        </div>
      )}
    </DialogContext.Provider>
  );
}
