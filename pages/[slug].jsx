import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function AnyPage() {
  const router = useRouter();
  return (
    <section className="py-52 text-center">
      <h1 className="text-6xl mb-10 text-primary uppercase">
        {router.query.slug}
      </h1>
      <p className="uppercase mb-7 font-semibold text-xs text-primary">
        this is the What We Do page
      </p>
      <p className="text-secondary-50 text-4xl">
        Go Back To{" "}
        <b className="text-primary cursor-pointer hover:text-secondary-100 underline">
          <Link href="/"> Home </Link>
        </b>{" "}
      </p>
    </section>
  );
}
