-- CreateTable
CREATE TABLE "reference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "initials" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "typeOfReference" TEXT NOT NULL,
    "dataSent" DATETIME NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1
);
