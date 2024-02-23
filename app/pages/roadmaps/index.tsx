import React from "react";
import Image from "next/image";
import CRoadmaps from "../../components/roadmaps";

export default function Roadmaps() {
  return (
    <section className=" py-5">
      <div className="container py-4" style={{ backgroundColor: "white" }}>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
          </div>
        </div>
        <CRoadmaps />
      </div>
    </section>
  );
}
