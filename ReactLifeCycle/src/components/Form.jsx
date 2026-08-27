import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState(localStorage.getItem("name"));
  console.log(name);

  useEffect(() => {
    return () => {
        console.log('Form component unmount')
      localStorage.clear();
    };
  }, []);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          localStorage.setItem("name", e.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />
    </div>
  );
};

export default Form;
