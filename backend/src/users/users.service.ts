import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // ✅ CREATE
  async create(data: { name: string; email: string }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  // ✅ READ (ทั้งหมด)
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // ✅ READ (เฉพาะ ID)
  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // ✅ UPDATE
  async update(id: number, data: { name?: string; email?: string }): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // ✅ DELETE
  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
