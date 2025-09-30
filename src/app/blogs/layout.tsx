import React from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Blog Layout</h1>
      <div>
        {children}
      </div>
    </div>
  );
}
