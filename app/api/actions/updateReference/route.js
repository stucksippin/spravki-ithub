import prisma from "@/libs/prisma"

export async function PATCH(request) {
    const data = await request.json()
    console.log({ data });
    const resp = await prisma.reference.update({
        data: {
            status: parseInt(data.status)
        },
        where: {
            id: parseInt(data.id)
        }
    })
    if (resp) {
        return Response.json({
            result: "OK"
        })
    } else {
        return Response.json({
            result: "fail"
        })
    }
}
