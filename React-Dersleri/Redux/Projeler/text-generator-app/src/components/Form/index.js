import { useSelector, useDispatch } from "react-redux";

import { setTextParagraph, setFormat } from "../../redux/textSlice";

function Form() {
  const dispatch = useDispatch();
  const { paragraph, format } = useSelector((state) => state.text);
  return (
    <div className="w-full mt-2 flex justify-center">
      {/* Paragraph number */}
      <div className="flex flex-col p-2">
        <label className="mb-2" htmlFor="p_number">
          Paragraphs
        </label>
        <input
          className="focus:overflow-hidden focus:outline-none border-none border-spacing-0 rounded-md "
          type="number"
          name="p_number"
          id="p_number"
          value={paragraph}
          onChange={(e) => dispatch(setTextParagraph(e.target.value))}
        />
      </div>

      <div className="flex flex-col p-2">
        <label className="mb-2" htmlFor="p_number">
          Include HTML
        </label>
        <select
          name="html"
          id="html"
          value={format}
          onChange={(e) => dispatch(setFormat(e.target.value))}
          className="focus:overflow-hidden focus:outline-none border-none border-spacing-0 rounded-md w-[150px]"
        >
          <option value="html">yes</option>
          <option value="text">no</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
