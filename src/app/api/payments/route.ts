import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Payment } from '@/models/Payment';
import { Order } from '@/models/Order';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { orderId, amount, method } = body;

    if (!orderId || !amount || !method) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Create the payment record
    const payment = await Payment.create({
      orderId,
      amount,
      method,
    });

    // 2. Update the order balance and status
    const order = await Order.findById(orderId);
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    const newAmountPaid = order.amountPaid + amount;
    const newBalance = order.totalAmount - newAmountPaid;
    
    let newStatus = 'PARTIAL';
    if (newBalance <= 0) {
      newStatus = 'PAID';
    }

    order.amountPaid = newAmountPaid;
    order.balance = Math.max(0, newBalance);
    order.status = newStatus;
    await order.save();

    return NextResponse.json({ 
      message: 'Payment recorded successfully', 
      order: order 
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
