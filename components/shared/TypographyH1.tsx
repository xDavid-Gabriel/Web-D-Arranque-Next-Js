interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TypographyH1 = ({ children, className }: Props) => {
  return (
    <h1
      className={`text-[26px] font-bold font-display leading-[45px] [letter-spacing:2px] ${className}`}
    >
      {children}
    </h1>
  );
};
