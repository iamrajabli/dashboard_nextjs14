import {PropsWithChildren} from "react";

import '@/app/ui/global.css';
import clsx from "clsx";
import {inter} from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'antialiased')}>{children}</body>
    </html>
  );
}
