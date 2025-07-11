"use client";

import Image from "next/image";
import IA from "./../../../public/images/IA.webp";
import IB from "./../../../public/images/IB.webp";
import IC from "./../../../public/images/IC.webp";

export default function Gallery() {
  return (
    <section className="py-10 my-8" >
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="overflow-hidden rounded-2xl ">
          <Image
            src={IA}
            alt="Site web créé à propos de l’IA"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={400}
            height={235}
          />
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={IB}
            alt="Site e-commerce de bien-être"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={400}
            height={235}
          />
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={IC}
            alt="Site internet de recettes culinaires"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={400}
            height={235}
          />
        </div>
      </div>
    </section>
  );
}
