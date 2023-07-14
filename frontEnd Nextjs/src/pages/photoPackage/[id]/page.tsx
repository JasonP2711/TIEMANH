import React from "react";
import axios from "axios";

type Props = {
  dataPackage: any;
};

export default function PhotoPackage({ dataPackage }: Props) {
  console.log("data: ", dataPackage);
  return (
    <>
      {" "}
      <div>hello</div>
      <div style={{ background: "red", height: "500px", marginTop: "200px" }}>
        {dataPackage}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const myPackage = await axios
    .get("http://localhost:9000/photographyPackage")
    .then((response) => {
      return response.data;
    });
  console.log("path");
  console.log(myPackage);
  const paths = myPackage?.results?.map((items: any, index: any) => ({
    params: {
      id: `${items._id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const dataPackage = await axios
    .get(`http://localhost:9000/photographyPackage/${params.id}`)
    .then((response) => {
      return response.data;
    });

  return {
    props: {
      dataPackage: dataPackage,
    },
  };
}
