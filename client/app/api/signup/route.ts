import { getApiRoute } from '@/lib/utils/helper';
import { AuthResult } from '@/types/user';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;

    if (
      !username ||
      !password ||
      username.length == 0 ||
      password.length == 0
    ) {
      return NextResponse.json(
        { message: 'username or password can not be empty.' },
        { status: 400 }
      );
    }

    const { data, status } = await axios.post<AuthResult>(
      getApiRoute('/auth/register'),
      {
        username: username,
        password: password,
      }
    );

    return NextResponse.json({
      message: 'User created successfully.',
      success: true,
      user: data,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        message:
          err?.response?.data?.error ??
          'Unable to register account. Try Again!',
      },
      { status: err.response.status ?? 500 }
    );
  }
}
