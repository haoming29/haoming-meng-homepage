import React from "react";
import { useRouter } from "next/router";
import MajorLayout from "../../components/layouts/MajorLayout";
import { codingProjects } from "../../config/cms";

const CodingDetail = () => {
  const router = useRouter();
  const { pid } = router.query;
  const data = codingProjects.filter((item) => item.id === pid)[0];
  return <MajorLayout></MajorLayout>;
};

export default CodingDetail;
