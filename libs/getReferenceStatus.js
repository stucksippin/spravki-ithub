import prisma from './prisma'

export default async function getReferenceStatus() {
    const references = await prisma.reference.findMany(
        {
            where: {
                status: 4
            }
        }
    )
    return references
}
