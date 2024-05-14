import prisma from './prisma'

export default async function getReferencesById(id) {
    const references = await prisma.reference.findMany({
        where: {
            userId: parseInt(id)
        }
    })
    return references
}
