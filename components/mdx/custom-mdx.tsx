import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostLink from "./link";
import PostImage from "./image";
import PostBanner from "./banner";
import rehypePrettyCode from "rehype-pretty-code";

// Fungsi slug Anda, tidak ada perubahan
const transformToSlug = (input: string) => {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .join("-")
    .split("&")
    .join("-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

// --- PERUBAHAN DIMULAI DI SINI ---

const getRawTextContent = (children: React.ReactNode): string => {
  let text = '';
  React.Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child;
    } else if (React.isValidElement(child)) {
      // FIX: Cast `props` ke tipe yang diketahui untuk mengatasi error 'unknown'.
      // Ini memberi tahu TypeScript bahwa `props` adalah objek yang mungkin memiliki `children`.
      const props = child.props as { children?: React.ReactNode };
      if (props.children) {
        // Jika child adalah elemen React, gali lebih dalam
        text += getRawTextContent(props.children);
      }
    }
  });
  return text;
};

// --- PERUBAHAN SELESAI ---

const generateHeading = (headingLevel: number) => {
  return ({ children }: { children: React.ReactNode }) => {
    const textForSlug = getRawTextContent(children);
    const slug = transformToSlug(textForSlug);

    return React.createElement(
      `h${headingLevel}`, 
      { id: slug }, 
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor-link",
          "aria-hidden": "true",
        }),
        children,
      ]
    );
  };
};

const mdxComponents = {
  h1: generateHeading(1),
  h2: generateHeading(2),
  h3: generateHeading(3),
  h4: generateHeading(4),
  h5: generateHeading(5),
  h6: generateHeading(6),
  Link: PostLink,
  Image: PostImage,
  Banner: PostBanner,
};

export function CustomMDX(props: any) {
  const rehypePrettyCodeOptions = {
    theme: "one-dark-pro",
    onVisitLine(node: any) {
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    onVisitHighlightedLine(node: any) {
      node.properties.className.push("line--highlighted");
    },
    onVisitHighlightedWord(node: any) {
      node.properties.className = ["word--highlighted"];
    },
  };

  return (
    <MDXRemote
      {...props}
      components={{ ...mdxComponents, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
      }}
    />
  );
}
