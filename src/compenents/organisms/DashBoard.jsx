import { Sidebar } from ".";

const DashBoard = (props) => {
  let { id } = props;
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
    </div>
  );
};

export default DashBoard;
