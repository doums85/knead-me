import React from "react";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
