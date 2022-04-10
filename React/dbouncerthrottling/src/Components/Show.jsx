import React, { useState } from "react";
import Counter from "./Counter";

const Show = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && <Counter />}
      <br />
      <br />
      <br />
      <br />
      <button>
        <h1 onClick={() => setToggle(!toggle)}>
          {toggle ? " Don't Show" : " Show"}
        </h1>
      </button>
    </>
  );
};

export default Show;
