import { NextResponse } from "next/server";

const PRINTFUL_IMAGE_URL =
  "https://cdn.printful.me/t/quick-stores/variants/w339/1431323369cf2e9d0c9df__825";

export async function GET() {
  try {
    const res = await fetch(PRINTFUL_IMAGE_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
        Referer: "https://runolr.printful.me/",
      },
    });

    if (!res.ok) {
      return new NextResponse("Image not found", { status: 404 });
    }

    const buffer = await res.arrayBuffer();
    const contentType = res.headers.get("content-type") || "image/webp";

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=604800",
      },
    });
  } catch {
    return new NextResponse("Failed to fetch image", { status: 500 });
  }
}
