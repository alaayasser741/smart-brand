import PropTypes from "prop-types";

const Overlay = ({ children }) => {
  return (
    <div className="overlay">
      <div className="content">{children}</div>
    </div>
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Overlay;
