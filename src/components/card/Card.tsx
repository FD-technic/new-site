import "./Card.css";

type CardProps = {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
};

const Card = ({ title = "Card", children, action }: CardProps) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {children}
        </div>
        {action && (
            <div className="card-action">
                {action}
            </div>
        )}
      </div>
    </>
  );
};

export default Card;
