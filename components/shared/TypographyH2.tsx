interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TypographyH2 = ({ children, className }: Props) => {
  return (
    <h2
      className={`text-[20px] sm:text-[30px] lg:text-[40px] font-display ${className}`}
    >
      {children}
    </h2>
  );
};
