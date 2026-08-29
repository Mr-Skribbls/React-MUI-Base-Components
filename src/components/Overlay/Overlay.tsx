import type { ReactNode } from 'react';
import style from './Overlay.module.css';

export interface OverlayProps {
  children?: ReactNode;
  className?: string;
}

export const Overlay = ({
  children,
  className,
}: OverlayProps) => {

  const classes = [style.overlay, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={style.container}>
        <div className={style.center}>
          { children }
        </div>
      </div>
    </div>
  );
};

export default Overlay;