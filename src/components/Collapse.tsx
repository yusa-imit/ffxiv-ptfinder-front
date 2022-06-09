import { ReactNode, useState } from "react";
interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: ReactNode;
}
export default function Collapse({
  title,
  content,
  className,
  ...etc
}: CollapseProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      tabIndex={0}
      className={`collapse collapse-arrow ${
        open === true ? "collapse-open" : "collapse-close"
      } bg-base-200 rounded-box ${className}`}
      {...etc}
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <div className="collapse-title pr-0">{title}</div>
      <div className="collapse-content">{content}</div>
    </div>
  );
}
