import React from "react";

function Form() {
  return (
    <div className="w-full mt-2 flex justify-center">
      <div className="flex flex-col p-2">
        <label className="mb-2" htmlFor="p_number">
          Paragraphs
        </label>
        <input
          className="focus:overflow-hidden focus:outline-none border-none border-spacing-0 rounded-md "
          type="number"
          name="p_number"
          id="p_number"
        />
      </div>
      <div className="flex flex-col p-2">
        <label className="mb-2" htmlFor="p_number">
          Tags
        </label>
        <select
          name="html"
          id="html"
          className="focus:overflow-hidden focus:outline-none border-none border-spacing-0 rounded-md w-[150px]"
        >
          <option value="p">p</option>
          <option value="span">span</option>
          <option value="h1">h1</option>
          <option value="h2">h2</option>
        </select>
      </div>
      <div className="flex flex-col p-2">
        <label className="mb-2" htmlFor="p_number">
          Include HTML
        </label>
        <select
          name="html"
          id="html"
          className="focus:overflow-hidden focus:outline-none border-none border-spacing-0 rounded-md w-[150px]"
        >
          <option value="p">yes</option>
          <option value="span">no</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
