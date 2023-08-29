import React, { useEffect, useState } from "react";
import { useGetChucknorrisSearchQuery } from "../../store/api/chucknorrisApi";
import styles from "./ChucknorrisSearch.module.scss";
import Card from "../Card/Card";

const ChucknorrisSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [isError, setIsError] = useState<any>();
  const { data, isLoading, error } = useGetChucknorrisSearchQuery(search);

  useEffect(() => {
    if (search.length === 0 || search.length >= 3) {
      setIsError(null);
      return;
    }
    const label = setTimeout(
      () =>
        setIsError(
          <label style={{ position: "absolute", color: "red" }}>
            Enter at least 3 characters
          </label>
        ),
      1000
    );
    return () => clearTimeout(label);
  }, [search.length]);

  if (error) {
    if ("status" in error) {
      if (error.status === 404) {
        return <></>;
      }
    }
  }
  return (
    <section className={styles.search}>
      <div className={styles.input}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          placeholder="Search jokes..."
          autoFocus
        />
        {isError ? isError : ""}
        {data?.total ? <p>{`Found jolers: ${data.total}`}</p> : ""}
      </div>
      {error ? (
        "status" in error ? (
          error.status === 404
        ) : (
          <div>The server is not responding</div>
        )
      ) : (
        ""
      )}
      <div className={styles.cards}>
        {isLoading ? (
          <div>Loading</div>
        ) : data ? (
          data?.result.map(e => <Card key={e.id} data={e} />)
        ) : (
          ""
        )}
        {data?.total === 0 && search.length > 2 ? <div>Not found</div> : ""}
      </div>
    </section>
  );
};

export default ChucknorrisSearch;
