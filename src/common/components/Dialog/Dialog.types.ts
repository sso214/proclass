import { BaseHTMLAttributes, ReactNode } from 'react';

export type DialogProps = BaseHTMLAttributes<HTMLDivElement> & {
  title?: string;
  subTitle?: string | ReactNode;
  contents?: ReactNode;
  footer?: ReactNode;
};
