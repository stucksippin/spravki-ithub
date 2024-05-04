import React from 'react'
import prisma from './prisma'

export default async function getReferences() {
    const references = await prisma.reference.findMany()
    return references
}
