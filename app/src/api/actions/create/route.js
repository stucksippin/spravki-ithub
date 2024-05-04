import { PrismaClient } from "@prisma/client"

export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

    const prisma = new PrismaClient()
    const resp = await prisma.tours.create({
        data: {
            name: data.name,
            data: data.data,
            city: data.city,
            type: data.type,
            price: parseInt(data.price),
            nutrition: !!data.nutrition,
            guide: !!data.guide,
        }
    })

    return Response.json({
        result: "OK"
    })

}