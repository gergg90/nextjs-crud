import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProductsModel {
  static findAll = () => {
    return prisma.product.findMany();
  };

  static create = (data) => {
    return prisma.product.create({
      data,
    });
  };

  static findById = (id) => {
    return prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  };

  static update = (id, data) => {
    return prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: data,
    });
  };

  static delete = (id) => {
    return prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
  };
}
