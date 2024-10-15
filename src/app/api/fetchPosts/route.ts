// app/api/products/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
      return NextResponse.json(
        { message: 'Failed to fetch data' },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'An unexpected error occurred', error: error.message },
      { status: 500 }
    );
  }
}
