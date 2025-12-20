export interface HeadingProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  children: React.ReactNode;
  noWrap?: boolean;
}
