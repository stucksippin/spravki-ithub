import prisma from "@/app/src/libs/prisma"

export async function POST(request) {
    const data = await request.json()
    const currentData = new Date
    const resp = await prisma.reference.create({
        data: {
            initials: data.initials,
            group: data.group,
            typeOfReference: data.typeOfReferences,
            dataSent: currentData
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