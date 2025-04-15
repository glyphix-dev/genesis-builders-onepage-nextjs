import { client } from "@/sanity/lib/client";
import urlBuilder from "@sanity/image-url";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Resize and image to a target width while maintaining the aspect ratio
export const resizeImage = async (width: number, height: number, targetWidth: number) => {
  const aspectRatio: number = await getAspectRatio(width, height);
  return {
    aspectRatio,
    width: targetWidth,
    height: targetWidth * aspectRatio,
    isLandscape: isLandscape(width, height),
    isPortrait: isPortrait(width, height),
    isSquare: isSquare(width, height),
  }
}

export const getAspectRatio = (width: number, height: number) => {
  const aspectRatio = width / height;
  return aspectRatio;
}

export const isLandscape = (width: number, height: number) => {
  const aspectRatio = width / height;
  return aspectRatio > 1;
}

export const isPortrait = (width: number, height: number) => {
  const aspectRatio = width / height;
  return aspectRatio < 1;
}

export const isSquare = async (width: number, height: number) => {
  const aspectRatio = width / height;
  return aspectRatio === 1;
}

export const getImageData = async ({ asset, width, height }: { asset: SanityAsset, width?: number, height?: number }) => {
  const imageUrl = urlBuilder(client).image(asset).width(width || 800).height(height || 600).dpr(2).auto('format').fit('max').url();
  const imageData = await client.fetch(`*[_id == $id][0]`, { id: asset._ref });
  return { ...imageData, url: imageUrl, };
}