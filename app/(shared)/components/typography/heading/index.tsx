import { clsx } from 'clsx';

import { HeadingProps } from './model/types';

import styles from './styles.module.scss';

const Heading: React.FC<HeadingProps> = ({ variant, children, className, noWrap }) => {
  const Component = variant;

  return (
    <Component className={clsx(styles[`heading-${variant}`], noWrap && styles.noWrap, className)}>
      {children}
    </Component>
  );
};

export default Heading;
