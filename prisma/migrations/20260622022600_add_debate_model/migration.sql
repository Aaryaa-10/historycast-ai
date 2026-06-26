/*
  Warnings:

  - You are about to drop the column `messages` on the `Debate` table. All the data in the column will be lost.
  - Added the required column `transcript` to the `Debate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Debate" DROP COLUMN "messages",
ADD COLUMN     "transcript" TEXT NOT NULL;
