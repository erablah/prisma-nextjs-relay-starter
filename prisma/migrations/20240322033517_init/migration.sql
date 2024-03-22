/*
  Warnings:

  - You are about to drop the column `couponCount` on the `User` table. All the data in the column will be lost.
  - Added the required column `status` to the `TuitionCoupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `TuitionCoupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TuitionCoupon` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TuitionStatus" AS ENUM ('ACTIVE', 'USED');

-- AlterTable
ALTER TABLE "TuitionCoupon" ADD COLUMN     "status" "TuitionStatus" NOT NULL,
ADD COLUMN     "type" "TuitionType" NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "couponCount";

-- AddForeignKey
ALTER TABLE "TuitionCoupon" ADD CONSTRAINT "TuitionCoupon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
