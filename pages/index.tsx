import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import mockedData from "../mockeddata";
import List from "../components/list";

import stringPathToObject from "../utils/functions";

const Home: NextPage = () => {
  const [mockedDataState, setMockedDataState] = useState(mockedData);
  const [columns, setColumns] = useState([
    {
      heading: "Nombre",
      key: "name",
      editable: true,
      handleEdit: (element, column, newValue) => {
        console.log("1", element, column, newValue);
      },
    },
    {
      heading: "Apellido",
      key: "nickname",
      editable: true,
      handleEdit: (element, column, newValue) => {
        console.log("2", element, column, newValue);
      },
    },
    {
      heading: "Status",
      key: "status",
      editable: false,
    },
    {
      heading: "Estado Civil",
      key: "marialState",
      editable: true,
      handleEdit: (element, column, newValue) => {
        console.log("3", element, column, newValue);
      },
    },
  ]);

  const [subColumns, setSubColumns] = useState([
    { heading: "Entrada", key: "punchs.timeIn.time" },
    { heading: "Salida", key: "punchs.timeOut.time" },
  ]);

  return (
    <div className={styles.container}>
      <List
        elements={mockedDataState}
        columns={columns}
        subColumns={subColumns}
      />
    </div>
  );
};

export default Home;
