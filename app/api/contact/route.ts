import { NextRequest, NextResponse } from 'next/server';

export interface InquiryItem {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

const inquiryList: InquiryItem[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, message } = body;

    if (!name || !message || typeof name !== 'string' || typeof message !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Name and message are required' },
        { status: 400 }
      );
    }

    const newInquiry: InquiryItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    inquiryList.unshift(newInquiry);

    return NextResponse.json({
      success: true,
      inquiry: newInquiry,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
