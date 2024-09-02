import { NextResponse } from "next/server";
import Post from "@/model/post";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const slug = searchParams.get("slug");

    console.log(email, slug);

    const games = await Post.findOne({ email, slug });
    return NextResponse.json(games, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch games" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const { slug, email, status } = await request.json();
    console.log(email, slug, status);
    const newGame = new Post({ slug, email, status });
    const savedGame = await newGame.save();
    return NextResponse.json(savedGame, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { email, slug, status } = await request.json();
    console.log(email, slug, status);
    const updatedGame = await Post.findOne({
      email: email,
      slug: slug,
    });
    console.log(updatedGame);
    if (!updatedGame) {
      const newGame = new Post({ slug, email, status });
      const savedGame = await newGame.save();
      return NextResponse.json(savedGame, { status: 201 });
    } else {
      console.log("games found");
      const updateGame = await Post.updateOne(
        { email: email, slug: slug },
        { status: status },
      );
      return NextResponse.json(updateGame, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const deletedGame = await Post.findByIdAndDelete(id);
    if (!deletedGame) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Game deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete game" },
      { status: 500 },
    );
  }
}

// export async function HEAD(request: Request) {
//   // HEAD requests typically return the same headers as GET requests without the body
//   try {
//     await Post.find({});
//     return new Response(null, { status: 200 });
//   } catch (error) {
//     return new Response(null, { status: 500 });
//   }
// }
