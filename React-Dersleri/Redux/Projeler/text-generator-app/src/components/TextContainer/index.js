import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchText } from "../../redux/textSlice";

import Form from "../Form";

function TextContainer() {
  const dispatch = useDispatch();

  const { items, paragraph, format } = useSelector((state) => state.text);
  useEffect(() => {
    dispatch(fetchText({ paragraph, format }));
  }, [dispatch, format, paragraph]);

  return (
    <div className="mt-[75px] min-h-[85vh] bg-slate-200 flex justify-center">
      <div className="sm:container bg-slate-500 min-h-[85vh] w-full rounded-xl p-4 shadow-md">
        <Form />

        {items}
      </div>
    </div>
  );
}

export default TextContainer;
