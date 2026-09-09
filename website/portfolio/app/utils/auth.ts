import { SignJWT, jwtVerify } from "jose";
import { userTokenData } from "@/types";
import { tokenAlgorithm, tokenExpiry } from "@/utils/constants";


export async function generateToken(user: userTokenData) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
  return new SignJWT({ ...user })
    .setProtectedHeader({ alg: tokenAlgorithm })
    .setExpirationTime(tokenExpiry)
    .sign(secret);
}

export async function verifyToken(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
  const { payload } = await jwtVerify(token, secret);
  return payload as unknown as userTokenData;
}

export async function requireAdmin(request: Request): Promise<userTokenData> {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) {
    throw new Error('Unauthorized');
  }

  const tokenMatch = cookieHeader.match(/token=([^;]+)/);
  if (!tokenMatch) {
    throw new Error('Unauthorized');
  }

  const token = tokenMatch[1];
  
  try {
    const decoded = await verifyToken(token);
    
    if (!decoded?.userId || !decoded?.role || decoded.role !== "ADMIN") {
      throw new Error('Forbidden');
    }
    
    return decoded;
  } catch {
    throw new Error('Unauthorized');
  }
}