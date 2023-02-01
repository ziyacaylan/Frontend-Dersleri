import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../../redux/quotesSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import QuoteItem from "../../components/QuopteItem";

function Quotes() {
  const { items, error, status } = useSelector((state) => state.quotes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuotes());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  if (status === "loading") {
    return <Loading />;
  }

  // console.log(items);
  // console.log(error);
  // console.log(status);
  return (
    <div>
      <h2 style={{ padding: "15px 0" }}>Quotes</h2>
      {status === "success" &&
        React.Children.toArray(items?.map((item) => <QuoteItem item={item} />))}
    </div>
  );
}

export default Quotes;
