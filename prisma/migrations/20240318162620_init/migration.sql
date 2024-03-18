-- CreateEnum
CREATE TYPE "TuitionType" AS ENUM ('TWENTY', 'FORTY');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "couponCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "image" TEXT,   

    CONSTRAINT "Tutor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tuition" (
    "id" TEXT NOT NULL,
    "type" "TuitionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "tuteeId" TEXT NOT NULL,
    "tutorId" TEXT NOT NULL,

    CONSTRAINT "Tuition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TuitionCoupon" (
    "id" TEXT NOT NULL,

    CONSTRAINT "TuitionCoupon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tuition" ADD CONSTRAINT "Tuition_tuteeId_fkey" FOREIGN KEY ("tuteeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tuition" ADD CONSTRAINT "Tuition_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "Tutor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
