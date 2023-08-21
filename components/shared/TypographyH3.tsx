interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TypographyH3 = ({ children, className }: Props) => {
  return (
    <h3
      className={`text-[18px] sm:text-[20px] lg:text-[24px] font-display ${className}`}
    >
      {children}
    </h3>
  );
};
