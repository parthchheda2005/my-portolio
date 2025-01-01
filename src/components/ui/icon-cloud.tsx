"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export type DynamicCloudProps = {
  iconSlugs?: string[];
  imageArray?: string[];
};

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    freezeActive: true,
    shuffleTags: true,
    shape: "sphere",
    zoom: 1,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

const IconCloud = ({ iconSlugs = [], imageArray }: DynamicCloudProps) => {
  const [data, setData] = useState<Record<string, SimpleIcon> | null>(null);
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIcons = async () => {
      if (iconSlugs.length === 0) return;

      try {
        setLoading(true);
        const result = await fetchSimpleIcons({ slugs: iconSlugs });
        setData(result.simpleIcons);
        // Log any missing icons
        const missingIcons = iconSlugs.filter(
          (slug) => !result.simpleIcons[slug]
        );
        if (missingIcons.length > 0) {
          console.warn("Missing icons:", missingIcons);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch icons");
        console.error("Error fetching icons:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchIcons();
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  if (loading) return <div className="text-center">Loading icons...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;
  if (!renderedIcons) return null;

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
      {imageArray?.map((image, index) => (
        <a key={index} href="#" onClick={(e) => e.preventDefault()}>
          <img height="42" width="42" alt="icon" src={image} />
        </a>
      ))}
    </Cloud>
  );
};

export default IconCloud;
