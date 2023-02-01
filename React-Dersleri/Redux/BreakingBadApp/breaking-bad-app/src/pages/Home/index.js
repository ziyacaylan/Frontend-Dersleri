import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { fetchCharacters } from "../../redux/charactersSlice";

import { Link } from "react-router-dom";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Home() {
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  //console.log("hata var", error);

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") {
    return <Error message={error} />;
  }
  // characters.map((ch) =>
  //   console.log(ch.img.split("").slice(43).join("").toString())
  // );
  return (
    <div>
      <h1>Caracters</h1>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {React.Children.toArray(
          characters.map((character) => (
            <div>
              <Link to={`/char/${character.char_id}`}>
                <img
                  src={character.img.split("").slice(43).join("").toString()}
                  alt={character.name}
                  className="character-img"
                />
                <div className="char_name">{character.name}</div>
              </Link>
            </div>
          ))
        )}
      </Masonry>
      <div style={{ padding: "20 0 40 0", textAlign: "center" }}>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && (
          <button
            className="btn"
            onClick={() => dispatch(fetchCharacters(nextPage))}
          >
            Load More {`(${nextPage})`}
          </button>
        )}
        {!hasNextPage && (
          <div style={{ color: "black" }}>There is nothing to be shown.</div>
        )}
      </div>
    </div>
  );
}

export default Home;
