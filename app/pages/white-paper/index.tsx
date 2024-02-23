import React from "react";
import Image from "next/image";
import CRoadmaps from "../../components/roadmaps";

export default function Roadmaps() {
  return (
    <section className=" py-5">
      <div className="container py-4 " style={{ backgroundColor: "white" }}>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            {/* <p className="section_sub_head">aaa</p> */}
          </div>
        </div>
        <div className="row align-items-center justify-content-center" >
          <Image
            width={900}
            height={636}
            alt="whitepaper"
            src={"/static/assets/images/whitepaper/0001.jpg"}
          ></Image>
          <Image
            width={900}
            height={636}
            alt="whitepaper"
            src={"/static/assets/images/whitepaper/0002.jpg"}
          ></Image>
          <Image
            width={900}
            height={636}
            alt="whitepaper"
            src={"/static/assets/images/whitepaper/0003.jpg"}
          ></Image>
          <Image
            width={900}
            height={636}
            alt="whitepaper"
            src={"/static/assets/images/whitepaper/0004.jpg"}
          ></Image>
          <Image
            width={900}
            height={636}
            alt="whitepaper"
            src={"/static/assets/images/whitepaper/0005.jpg"}
          ></Image>

          <Image
            width={900}
            height={636}
            alt="whitepaper"
            src={"/static/assets/images/whitepaper/0007.jpg"}
          ></Image>
          <div style={{ margin: 20 }}></div>
          <Image

            width={900}
            height={636}
            alt="whitepaper"
            src={"/static/assets/images/whitepaper/0008.jpg"}
          ></Image>



        </div>
      </div>
    </section>
  );
}
