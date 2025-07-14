// /src/app/api/products/route.ts

export async function GET() {
  try {
    const res = await fetch("http://bakeryapisssssa.runasp.net/api/Products");
    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.error("خطأ في جلب البيانات من الباك إند:", error);
    return new Response("فشل في جلب البيانات", { status: 500 });
  }
}
