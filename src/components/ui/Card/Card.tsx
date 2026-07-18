import type React from "react";
import "./Card.css";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  image?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

const Card = ({
  title = "New Card",
  image,
  children,
  action,
  className,
}: CardProps) => {
  return (
    <article className={`card ${className ?? ""}`}>
      <div className="card-body">
        <header className="card-header">
          <h2 className="card-title">{title}</h2>
        </header>
        <hr />

        {image && <div className="card-img">{image}</div>}

        {children}
      </div>
      {action && (
        <div>
          <hr />
          <div className="card-action">{action}</div>
        </div>
      )}
    </article>
  );
};

export default Card;
