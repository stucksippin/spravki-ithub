import { NextAuthOptions } from "@/config"
import prisma from "@/libs/prisma"

import { getServerSession } from "next-auth"

export async function POST(request) {
    const session = await getServerSession(NextAuthOptions)
    const data = await request.json()

    const { initials } = await prisma.user.findFirst({
        where: {
            id: session.user.id
        }
    })


    const checkCount = await prisma.reference.count({
        where: {
            NOT: {
                status: 4
            },
            typeOfReference: data.typeOfReferences,
            userId: session.user.id
        }
    })


    if (checkCount > 1) {
        return Response.json({
            result: "Вы заказали более 2 справок одного типа, проверьте личный кабинет "
        })
    }



    const currentData = new Date
    const resp = await prisma.reference.create({
        data: {
            initials: initials,
            group: data.group,
            typeOfReference: data.typeOfReferences,
            dataSent: currentData,
            userId: Number(session.user.id)
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


