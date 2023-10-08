import bcrypt from "bcrypt";
import crypto from "crypto";
import { NextResponse } from "next/server";

// 이메일을 받아서 새로운 비밀번호를 생성하고 해싱하여 반환하는 함수
async function generateAndHashPassword(email: string) {
  try {
    // 무작위 비밀번호 생성 (예: 12자리 문자열)
    const newPassword = crypto.randomBytes(6).toString("hex");
    // 비밀번호를 Bcrypt로 해싱
    const saltRounds = 10; // 솔트 라운드 수
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    return { newPassword, hashedPassword };
  } catch (error) {
    throw error;
  }
}

export async function POST(request: Request) {
  console.log(request.body);
  try {
    // const email = await request.json();
    // const test = generateAndHashPassword(email);
    // return NextResponse.json(test, { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
