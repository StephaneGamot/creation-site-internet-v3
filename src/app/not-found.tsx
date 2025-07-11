"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound-wrapper">
      <div className="notfound-overlay" />

      <div className="notfound-content">
        <h1 className="text-5xl sm:text-7xl font-semibold !text-white">
          Vous êtes perdu
        </h1>
        <p className="mt-6 text-lg sm:text-xl !text-white/80">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="text-white font-semibold text-xl underline">
            &larr; Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
