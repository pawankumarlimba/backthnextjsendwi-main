import { connect } from '@/dbConfig/dbConfig';
import { getUserData } from '@/helpers/getUserData';
import Admin from '@/models/adminModel';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
  try {
    const userId = await getUserData(request);
    const admin = await Admin.findById(userId);
    if (!admin) {
      return NextResponse.json({ error: 'login as Admin' }, { status: 400 });
    }
    const users = await User.find().select('-password');
    return NextResponse.json({
      message: 'Users found',
      success: true,
      users,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
