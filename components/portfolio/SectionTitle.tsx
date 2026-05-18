type SectionTitleProps = {
  children: string;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="w-full mb-5 text-left">
      <h2 className="text-2xl md:text-4xl font-bold">{children}</h2>
      {/* <div className="w-50 h-3 glass rounded-full mt-4" /> */}
    </div>
  );
}
