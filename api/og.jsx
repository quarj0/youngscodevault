import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("quarj0");

    if (!username) {
      return new ImageResponse('Visit with "?quarj0=vercel"', {
        width: 1200,
        height: 630,
      });
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            fontSize: 60,
            color: "black",
            background: "#f6f6f6",
            width: "100%",
            height: "100%",
            paddingTop: 50,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`https://github.com/${username}.png`}
            style={{
              borderRadius: 100,
            }}
            alt={`${username}'s GitHub avatar`}
          />
          <p>github.com/{username}</p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error(error);
    return new ImageResponse(
      "An error occurred while processing your request.",
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
