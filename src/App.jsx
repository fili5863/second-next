import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?start=" + page * 10)
      .then((res) => res.json())
      .then((data) => {
        setArticles((oldData) => [...oldData, ...data]);
      });
  }, [page]);

  return (
    <>
      <button onClick={() => setPage((oldPage) => oldPage + 1)}>Load 10 more({page})</button>
      {articles.length === 0 ? (
        <p>LOADING...</p>
      ) : (
        <ul>
          {articles.map((art) => (
            <li>
              <article>
                <h2>{art.productdisplayname}</h2>
                {art.discount && <p>ON SALE NOW</p>}
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
