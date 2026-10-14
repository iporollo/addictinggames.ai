import type { SelectHTMLAttributes } from 'react';
import { Icon } from './Icon';

export function SelectControl({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <span className="select-control"><select {...props}>{children}</select><Icon name="down" width={18} height={18} className="select-chevron" /></span>;
}
