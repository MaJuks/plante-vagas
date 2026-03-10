-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "postalCode" TEXT NOT NULL,
    "userCandidateId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCandidate" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dateNasc" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "disablePerson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserCandidate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_userCandidateId_key" ON "Address"("userCandidateId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCandidate_email_key" ON "UserCandidate"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserCandidate_cpf_key" ON "UserCandidate"("cpf");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userCandidateId_fkey" FOREIGN KEY ("userCandidateId") REFERENCES "UserCandidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
