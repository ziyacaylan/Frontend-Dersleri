import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchCharDetails, clearItem } from "../../redux/charactersSlice";

import Loading from "../../components/Loading";

function Details() {
  const { char_id } = useParams();
  const item = useSelector((state) => state.characters.item);
  const status = useSelector((state) => state.characters.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearItem());
    dispatch(fetchCharDetails(char_id));
  }, []);

  // console.log(items);
  // console.log(char_id);
  //console.log(item);
  return (
    <div style={{ color: "black" }}>
      {status === "loading" && <Loading />}
      {item && (
        <div>
          <h1 style={{ color: "blue" }}>{item.name}</h1>
          {item.img && (
            <img
              src={item.img}
              alt={item.img}
              style={{ width: "50%", display: "block" }}
            />
          )}
        </div>
      )}
      {item && <pre>{JSON.stringify(item, null, 2)}</pre>}
    </div>
  );
}

export default Details;
