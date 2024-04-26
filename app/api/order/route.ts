import { NextApiResponse } from "next";

const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANT_ID = "PGTESTPAYUAT";
const SALT_INDEX = 1;
const SALT = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
import { uuid as uuidv4 } from "uuidv4";
import axios from "axios";
import sha256 from "sha256";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextApiResponse) => {
  const transId = uuidv4();

  const body = await req.json();

  const payload = {
    merchantId: "PGTESTPAYUAT",
    merchantTransactionId: transId,
    merchantUserId: MERCHANT_ID,
    amount: 100 * body.quantity * 100,
    redirectUrl: `${process.env.FRONTEND_URL}/payment-callback/${transId}`,
    redirectMode: "REDIRECT",
    callbackUrl: `${process.env.FRONTEND_URL}/payment-callback/${transId}`,
    mobileNumber: "9912199121",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const bufferObj = Buffer.from(JSON.stringify(payload), "utf-8");
  const base64 = bufferObj.toString("base64");
  const xVerify = sha256(base64 + "/pg/v1/pay" + SALT) + "###" + SALT_INDEX;
  const options = {
    method: "post",
    url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": xVerify,
    },
    data: {
      request: base64,
    },
  };
  const response = await axios.post(options.url, options.data, {
    headers: options.headers,
  });

  return NextResponse.json(
    { url: response.data.data.instrumentResponse.redirectInfo.url as string },
    { status: 200 }
  );
};
