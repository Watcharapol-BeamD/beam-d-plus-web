'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Define the props type
type ButtonProps = {
  title: string | number;
  url: string ;
};

// Define and export the Button component
export default function ButtonLink({ title,url }: ButtonProps) {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // or return a loading spinner if appropriate
  }

  return (
    <Link href={url}>
      <button className="bg-primary py-3 px-6 rounded-full text-white text-lg">
        {title}
      </button>
    </Link>
  );
}
