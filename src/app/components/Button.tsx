import React from "react";

// Define the props type
type ButtonProps = {
  title: string | number;
};

// Define and export the Button component
export default function Button({ title }: ButtonProps) {
  return (
    <button className="bg-primary py-3 px-6 rounded-full text-white text-lg">
      {title}
    </button>
  );
}
