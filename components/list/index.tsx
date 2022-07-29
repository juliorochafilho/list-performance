import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface ElementsProps {}

interface ColumnsProps {
  heading: string;
  key: string;
}

interface SubElementsProps {}

interface SubColumnsProps {}

interface ListProps {
  elements: ElementsProps[];
  columns: ColumnsProps[];
  subElements: SubElementsProps[];
  subColumns: SubColumnsProps[];
}

export default function List({
  elements,
  subElements,
  columns,
  subColumns,
}: any) {
  const handleUpdate = async (data) => {};

  return (
    <div className={styles.container}>
      {elements.map((element) => (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* <p style={{ marginLeft: 10 }}> {user.name}</p>
              <p style={{ marginLeft: 10 }}> {user.nickname}</p>
              <p style={{ marginLeft: 10 }}> {user.status}</p> */}
            </div>

            <div
              style={{ display: "flex", flexDirection: "row", marginLeft: 50 }}
            >
              {element?.subelements?.map((subelement) => (
                <>
                  {/* <p>{punch.timeIn.time}</p>
                  <p style={{ marginLeft: 20 }}>
                    {punch?.timeOut?.time || "Sin salida"}
                  </p> */}
                </>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
