import React from "react";
import Image from "next/image";
import CRoadmaps from "../../components/roadmaps";

export default function Roadmaps() {
  return (
    <section className="FAQ_page py-5">
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">Roadmaps</h3>
            {/* <p className="section_sub_head">aaa</p> */}
          </div>
        </div>
        <CRoadmaps />
      </div>
    </section>
  );
}
