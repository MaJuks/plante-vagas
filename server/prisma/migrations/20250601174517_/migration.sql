-- CreateTable
CREATE TABLE "AddressCompany" (
    "id" SERIAL NOT NULL,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "postalCode" TEXT NOT NULL,
    "userCompanyId" INTEGER NOT NULL,

    CONSTRAINT "AddressCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCompany" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "openingDate" TIMESTAMP(3) NOT NULL,
    "cnpj" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "socialReason" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserCompany_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddressCompany_userCompanyId_key" ON "AddressCompany"("userCompanyId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCompany_email_key" ON "UserCompany"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserCompany_cnpj_key" ON "UserCompany"("cnpj");

-- AddForeignKey
ALTER TABLE "AddressCompany" ADD CONSTRAINT "AddressCompany_userCompanyId_fkey" FOREIGN KEY ("userCompanyId") REFERENCES "UserCompany"("id") ON DELETE CASCADE ON UPDATE CASCADE;
