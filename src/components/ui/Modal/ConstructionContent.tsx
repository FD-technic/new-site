import "./Modal.css";
import img from "../../../assets/construction.png";

const ConstructionContent = () => {
  return (
    <>
      <h3 className="sub-title">Under Construction</h3>
      <div className="modal-header">
        <img src={img} />
      </div>
      <p className="modal-block">
        <div>This feature is currently under development</div>
        <div>and will be available in a future release.</div>
      </p>
    </>
  );
};

export default ConstructionContent;
