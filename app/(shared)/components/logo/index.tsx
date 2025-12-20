import Image from 'next/image';

import { clsx } from 'clsx';

import { LogoProps } from './model/types';

import styles from './styles.module.scss';

const Logo: React.FC<LogoProps> = ({ width, height, className }) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Image
        src={'/assets/header-logo.svg'}
        alt="logo"
        width={width ? width : 32}
        height={height ? height : 40}
      />
    </div>
  );
};

export default Logo;
