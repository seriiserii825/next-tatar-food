"use client";
import { siteConfig } from "@/config/siteConfig";
import { usePathname } from "next/navigation";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

interface IPageContentProps {
  alignCenter?: boolean;
}

export default function PageContent({
  alignCenter = false,
}: IPageContentProps) {
  const pathname = usePathname();
  const pageContent =
    siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];
  if (!pageContent) {
    return <div>Page not found</div>;
  }
  const clean = DOMPurify.sanitize(pageContent.text);
  const defaultClasses = "text-content mx-auto max-w-3xl pb-16";
  const alignCenterClasses = alignCenter ? "text-center" : "";
  const classes = `${defaultClasses} ${alignCenterClasses}`;
  return <div className={classes}>{parse(clean)}</div>;
}
