import { NextResponse } from 'next/server';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE;
const AIRTABLE_TABLE_ID = 'tbl5AUoCl96h5WEMk';

export async function POST(request: Request) {
  if (!AIRTABLE_API_KEY) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const { name, description, author, gameUrl } = await request.json();

    // Validate required fields
    if (!name || !description || !author || !gameUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Submit to Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Description: description,
                Author: author,
                GameURL: gameUrl,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit to Airtable');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting game:', error);
    return NextResponse.json(
      { error: 'Failed to submit game' },
      { status: 500 }
    );
  }
}
