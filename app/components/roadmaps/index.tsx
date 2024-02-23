import React from "react";
import Image from "next/image";

export default function CRoadmaps() {
    return (
        <div className="row align-items-center justify-content-center" >
            <Image
                width={900}
                height={450}
                alt="roadmap_1"
                src={"/static/assets/images/roadmap/roadmap_1.jpg"}
            ></Image>
            <Image
                width={800}
                height={450}
                alt="roadmap_2"
                src={"/static/assets/images/roadmap/roadmap_2.jpg"}
            ></Image>
            <Image
                alt="roadmap_3"
                width={800}
                height={450}
                src={"/static/assets/images/roadmap/roadmap_3.jpg"}
            ></Image>
        </div>
    );
}
