import { FC, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  className?: string;
}

const SunIcon: FC<Props> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" {...props}>
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
    </svg>
  );
};

export default SunIcon;
