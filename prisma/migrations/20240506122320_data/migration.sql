-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_reference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "initials" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "typeOfReference" TEXT NOT NULL,
    "dataSent" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_reference" ("dataSent", "group", "id", "initials", "status", "typeOfReference") SELECT "dataSent", "group", "id", "initials", "status", "typeOfReference" FROM "reference";
DROP TABLE "reference";
ALTER TABLE "new_reference" RENAME TO "reference";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
