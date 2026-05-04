type SectionTitleProps = {
  children: string;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div>
      <h2>{children}</h2>
      <div />
    </div>
  );
}
