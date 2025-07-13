export default function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const classes = `text-white text-[450px] relative left-1/2 -translate-x-1/2 -mt-40 font-extrabold tracking-widest select-none pointer-events-none leading-none ${className}`;
  return <h1 className={classes}>{children}</h1>;
}
