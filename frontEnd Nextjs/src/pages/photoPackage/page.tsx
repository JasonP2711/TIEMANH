"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = { dataPackage: any };

async function getData() {
  const res = await fetch("http://localhost:9000/photographyPackage");
  cache: "no-store";
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function Page({ dataPackage }: Props) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const a = async () => {
      const fetch = async () => {
        const data = await getData();
        setData(data);
      };
    };
  }, []);
  // const data = await getData();
  // console.log(data);
  // useEffect(() => {
  //   console.log(data);
  // }, []);
  return (
    <>
      <div>
        {/* <div></div> */}
        <div
          style={{ background: "red", height: "500px", paddingTop: "200px" }}
        >
          <div>{JSON.stringify(data)}</div>
          ----------------------------------------------------------
          {data?.results.map((item: any, index: any) => {
            <div key={index}>
              <span>package</span>
              {item.package}
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

export default Page;
