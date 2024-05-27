type PanelPeaderProps = {
  title: string;
  circle?: boolean;
  circleColor?: string;
};

export function PanelHeader({
  title,
  circle,
  circleColor = "#ffffff",
}: PanelPeaderProps) {
  return (
    <header className="py-2.5 flex items-center text-sm px-5">
      {circle && (
        <span
          className="size-2 rounded-full"
          style={{ backgroundColor: circleColor }}
        />
      )}
      <span className="text-zinc-400 ml-2">{title}</span>
    </header>
  );
}
