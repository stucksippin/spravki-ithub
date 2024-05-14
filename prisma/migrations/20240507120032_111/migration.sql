/*
  Warnings:

  - Added the required column `initials` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "initials" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user'
);
INSERT INTO "new_user" ("email", "id", "password", "role") SELECT "email", "id", "password", "role" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE TABLE "new_reference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "initials" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "typeOfReference" TEXT NOT NULL,
    "dataSent" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "reference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_reference" ("dataSent", "group", "id", "initials", "status", "typeOfReference", "userId") SELECT "dataSent", "group", "id", "initials", "status", "typeOfReference", "userId" FROM "reference";
DROP TABLE "reference";
ALTER TABLE "new_reference" RENAME TO "reference";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
