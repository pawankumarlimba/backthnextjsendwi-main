import { connect } from '@/dbConfig/dbConfig';
import { getUserData } from '@/helpers/getUserData';
import Admin from '@/models/adminModel';
import Design from '@/models/designModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
  try {
    const userId = await getUserData(request);
    const admin = await Admin.findById(userId);
    if (!admin) {
      return NextResponse.json({ error: 'login as Admin' }, { status: 400 });
    }
    const reqBody = await request.json();
    const { id } = reqBody;

    const design = await Design.findById(id);
    if (!design) {
      return NextResponse.json(
        { error: 'Design does not exist' },
        { status: 400 }
      );
    }

    const data = await design.deleteOne();
    // console.log(savedDesign);

    return NextResponse.json({
      message: 'Design removed successfully',
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
