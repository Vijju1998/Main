import React from 'react';
import { useClassBuilder } from '@hooks/useClassBuilder';
const classMap = {
  active: 'btn-active',
  loading: 'loading',
  noAnimation: 'no-animation',
  importance: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
  },
  status: {
    info: 'btn-info',
    warning: 'btn-warning',
    error: 'btn-error',
    success: 'btn-success',
  },
  btnSize: {
    large: 'btn-lg',
    medium: 'btn-md',
    small: 'btn-sm',
  },
  variant: {
    outline: 'btn-outline',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
  },
  widthStyle: {
    full: 'btn-block',
    wide: 'btn-wide',
  },
  kind: {
    circle: 'btn-circle',
    square: 'btn-square',
    rounded: 'rounded',
  },
};
interface ButtonProps {
  importance?: keyof typeof classMap.importance;
  status?: keyof typeof classMap.status;
  label: string;
  btnSize?: keyof typeof classMap.btnSize;
  variant?: keyof typeof classMap.variant;
  active?: boolean;
  noAnimation?: boolean;
  outline?: keyof typeof classMap.outline;
  widthStyle?: keyof typeof classMap.widthStyle;
  kind?: keyof typeof classMap.kind;
  loading?: boolean;
}
export const Button: React.FC = (props: ButtonProps) => {
  const {
    btnSize,
    status,
    importance,
    active = true,
    loading = false,
    noAnimation = false,
  } = props;
  const { classList } = useClassBuilder(
    {
      styleProps: {
        importance,
        btnSize,
        status,
        loading,
        active,
        noAnimation,
      },
      classMap: classMap,
      baseClasses: 'btn',
    },
    [importance, status, btnSize, loading, active, noAnimation]
  );
  console.log(classList);
  return (
    <div>
      <button
        className={classList}
        onClick={() => console.log('Button clicked')}
      >
        {props.label}
      </button>
    </div>
  );
};
