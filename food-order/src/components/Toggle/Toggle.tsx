import React, { useRef } from 'react';
import { useClassBuilder } from '@hooks/useClassBuilder';

const classMap = {
  importance: {
    primary: 'toggle-primary',
    secondary: 'toggle-secondary',
    accent: 'toggle-accent',
  },
  toggleSize: {
    large: 'toggle-lg',
    medium: 'toggle-md',
    small: 'toggle-sm',
  },
  fontSize: {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
  },
};
interface ToggleProps {
  importance?: keyof typeof classMap.importance;
  toggleSize?: keyof typeof classMap.btnSize;
  labelPosition?: 'left' | 'right';
}
export const Toggle: React.FC<ToggleProps> = ({
  importance,
  toggleSize,
  labelPosition,
}) => {
  const { classList } = useClassBuilder(
    {
      styleProps: {
        importance,
        toggleSize,
      },
      classMap: classMap,
      baseClasses: 'toggle',
    },
    [importance, toggleSize]
  );
  const ref = useRef(null);
  return (
    <div className='form-control'>
      <label
        className={`cursor-pointer label ${
          labelPosition === 'right' ? 'flex-row-reverse' : ''
        }`}
      >
        <span className={`label-text ${classMap.fontSize[toggleSize]}`}>
          Remember me
        </span>
        <input type='checkbox' ref={ref} className={classList} />
      </label>
    </div>
  );
};
