import prisma from "@/libs/prisma"

export async function DELETE(request) {

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
