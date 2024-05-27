import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProductsModel {
  static findAll = () => {
    return prisma.product.findMany();
  };

  static createProduct = (data) => {
    return prisma.product.create({
      data,
    });
  };
}
