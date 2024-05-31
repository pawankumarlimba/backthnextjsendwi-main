import { connect } from '@/dbConfig/dbConfig';
import Design from '@/models/designModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
  try {
    const designs = await Design.find();
    if (!designs) {
      return NextResponse.json(
        { error: 'design does not exist' },
        { status: 400 }
      );
    }
    return NextResponse.json({
      message: 'Design found',
      success: true,
      designs,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
