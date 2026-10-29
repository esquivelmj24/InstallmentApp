import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Order } from '@/models/Order';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { userId, productId, productName, totalAmount } = body;

    // Set deadline to 1 year from now
    const deadline = new Date();
    deadline.setFullYear(deadline.getFullYear() + 1);

    const order = await Order.create({
      userId,
      productId,
      productName,
      totalAmount,
      balance: totalAmount,
      amountPaid: 0,
      status: 'PENDING',
      deadline,
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    return NextResponse.json(orders, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
