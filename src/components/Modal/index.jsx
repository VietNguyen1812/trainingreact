import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const { visible, children } = props;
  const containerRef = useRef();
  const modalContainerRef = useRef();

  const [state, setState] = useState({
    rootElement: null,
  });

  useEffect(() => {
    const element = document.createElement("div");
    modalContainerRef.current = element;

    document.body.append(element);
    setState((prev) => ({ ...prev, rootElement: element }));
  }, []);

  const renderModal = visible ? (
    <div
      ref={containerRef}
      style={{
        backgroundColor: "black",
        opacity: 0.5,
        height: "full",
        width: "full",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        position: "fixed",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            transform: "translateY(30%)",
            backgroundColor: "white",
            color: "black",
            height: "400px",
            width: "400px",
            margin: "auto",
            zIndex: 10,
            top: "0px",
          }}
        >
          Test Modal
          <div>{children}</div>
        </div>
      </div>
    </div>
  ) : null;

  console.log(visible);

  return (
    state.rootElement &&
    ReactDOM.createPortal(<>{renderModal}</>, state.rootElement)
  );
};

export default Modal;
