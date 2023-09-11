import type { ReactNode } from 'react';

export interface ModalProps {
  visible?: boolean;
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
  okText?: string;
  closeText?: string;
  width?: number;
  maskClosable?: boolean;
  onClose?: () => void;
  onOk?: () => void;
}