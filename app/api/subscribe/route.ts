import { NextRequest, NextResponse } from 'next/server';

export interface SubscriberItem {
  id: string;
  email: string;
  interest: string;
  subscribedAt: string;
}

// In-memory data store for runtime + persistence helper
const subscribersList: SubscriberItem[] = [
  {
    id: '1',
    email: 'contact@jodour.ma',
    interest: 'أخبار ومستجدات الجمعية العامة',
    subscribedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, interest } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const cleanedEmail = email.trim().toLowerCase();

    // Check if already subscribed in list
    const exists = subscribersList.some((s) => s.email === cleanedEmail);
    if (exists) {
      return NextResponse.json({
        success: true,
        alreadySubscribed: true,
        message: 'Email already subscribed',
      });
    }

    const newSub: SubscriberItem = {
      id: Math.random().toString(36).substring(2, 9),
      email: cleanedEmail,
      interest: interest || 'General',
      subscribedAt: new Date().toISOString(),
    };

    subscribersList.unshift(newSub);

    return NextResponse.json({
      success: true,
      alreadySubscribed: false,
      subscriber: newSub,
      totalCount: subscribersList.length,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Server error occurred' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    total: subscribersList.length,
    subscribers: subscribersList,
  });
}
