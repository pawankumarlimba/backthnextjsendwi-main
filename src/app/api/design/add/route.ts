import { connect } from '@/dbConfig/dbConfig';
import { getUserData } from '@/helpers/getUserData';
import Admin from '@/models/adminModel';
import Design from '@/models/designModel';
import { NextRequest, NextResponse } from 'next/server';
import { UploadImage } from '@/utils/cloudnary';

connect();

export async function POST(request: NextRequest) {
  try {
    // check for admin

    const userId = await getUserData(request);
    const admin = await Admin.findById(userId);
    if (!admin) {
      return NextResponse.json({ error: 'login as Admin' }, { status: 400 });
    }

    // check if design available

    const reqBody = await request.formData();
    // console.log(reqBody);
    const name = reqBody.get('name');
    const design = await Design.findOne({ name });
    if (design) {
      return NextResponse.json(
        { error: 'Design already exist' },
        { status: 400 }
      );
    }

    // upload on cloudinary

    const file = reqBody.get('image') as unknown as File;
    const data = (await UploadImage(file, 'designs')) as any;
    const url = data.secure_url;

    // create design

    const newDesign = new Design({
      name,
      url,
      category: reqBody.get('category'),
      description: reqBody.get('description'),
      price: reqBody.get('price'),
    });

    // save design

    const savedDesign = await newDesign.save();
    // console.log(savedDesign);

    return NextResponse.json({
      message: 'Design created successfully',
      success: true,
      savedDesign,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
