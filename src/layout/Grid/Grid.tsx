import "./Grid.css";

type GridProps = {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
};

const Grid = ({ children, columns = 3, gap = "md", className }: GridProps) => {
  return (
    <div className={`grid cols-${columns} gap-${gap} ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Grid;
