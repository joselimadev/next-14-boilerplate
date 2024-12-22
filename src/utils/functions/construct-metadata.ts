import { Metadata } from "next";

export function constructMetadata({
  title = "Title Placeholder",
  description = "Description Placeholder",
  image = "/_static/images/thumbnail.jpg",
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      url: "/favicon-48x48.png",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      creator: "@acme",
    },
    icons,
    metadataBase: new URL("https://acme.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
