type SectionTitleProps = {
  children: string;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="w-full mb-5 text-left">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">{children}</h2>
      {/* <div className="w-full h-1 dark:bg-white bg-gray-900 rounded-full mt-4" /> */}
    </div>
  );
}
