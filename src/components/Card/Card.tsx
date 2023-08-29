import React, { FC } from "react";
import { IChucknorris } from "../../types/IChucknorrisSearch";
import styles from "./Card.module.scss";
import { TruncateDate } from "../../utils/truncateDate";

interface ICard {
  data: IChucknorris;
}

const Card: FC<ICard> = ({ data }) => {
  return (
    <a href={data.url} className={styles.card}>
      <div className={styles.description}>{data.value}</div>
      <div className={styles.date}>
        <div>{TruncateDate(data.created_at)}</div>
        <div>{TruncateDate(data.updated_at)}</div>
      </div>
    </a>
  );
};

export default Card;
