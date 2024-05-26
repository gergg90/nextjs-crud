import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryModel {
  static findAll = async () => {
    return prisma.category.findMany();
  };
}
