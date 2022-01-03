import React from 'react';
import { useClassBuilder } from '@hooks/useClassBuilder';
const classMap = {
  status: {
    info: 'btn-info',
    warning: 'btn-warning',
    error: 'btn-error',
    success: 'btn-success',
  },
  btnSize: {
    large: 'btn-md',
  },
};
interface ButtonProps {
  status?: keyof typeof classMap.status;
  label: string;
  btnSize?: keyof typeof classMap.btnSize;
}
export const Button: React.FC = (props: ButtonProps) => {
  const { btnSize, status } = props;
  const { classList } = useClassBuilder({
    styleProps: {
      btnSize,
      status,
    },
    classMaps: classMap,
  });
  console.log(classList);
  return (
    <div>
      <button
        className={`${classList} bg-gray-900`}
        onClick={() => console.log('Button clicked')}
      >
        {props.label}
      </button>
    </div>
  );
};
