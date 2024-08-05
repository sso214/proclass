import { useContext } from 'react';

import { DialogContext } from '@/common/contexts';

export function useDialog() {
  return useContext(DialogContext);
}
