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
    { heading: "Nombre", key: "name" },
    { heading: "Apellido", key: "nickname" },
    { heading: "Status", key: "status" },
  ]);

  const [subColumns, setSubColumns] = useState([
    { heading: "Entrada", key: "timeIn.time" },
    { heading: "Salida", key: "timeOut.time" },
  ]);

  const [subElements, setSubElements] = useState([
    { heading: "Nombre", key: "name" },
    { heading: "Apellido", key: "nickname" },
    { heading: "Status", key: "status" },
  ]);

  let myObj = {
    timeIn: {
      time: 2,
    },
  };

  console.log(stringPathToObject(myObj, "timeIn.time", 100));

  return (
    <div className={styles.container}>
      {/* <List elements={mockedDataState} /> */}
    </div>
  );
};

export default Home;
