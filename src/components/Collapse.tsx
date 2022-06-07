import { ReactChild, ReactChildren, useState } from "react";
interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: ReactChild | ReactChildren;
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
      className={`collapse collapse-arrow border ${
        open === true ? "collapse-open" : "collapse-close"
      } border-base-300 bg-base-200 rounded-box ${className}`}
      {...etc}
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <div className="collapse-title font-medium">{title}</div>
      <div className="collapse-content">{content}</div>
    </div>
  );
}
