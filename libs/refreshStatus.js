import prisma from '@/libs/prisma';

export default async function updateReferenceStatus(referenceId, newStatus) {
    try {
        // Находим справку по её идентификатору
        const reference = await prisma.reference.findUnique({
            where: {
                id: referenceId,
            },
        });

        if (!reference) {
            throw new Error('Справка не найдена');
        }

        // Обновляем статус справки
        const updatedReference = await prisma.reference.update({
            where: {
                id: referenceId,
            },
            data: {
                status: newStatus,
            },
        });

        return updatedReference;
    } catch (error) {
        console.error('Ошибка при обновлении статуса справки:', error);
        throw error;
    }
}
