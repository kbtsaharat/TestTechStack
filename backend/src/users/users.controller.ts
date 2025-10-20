import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ✅ CREATE
  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.usersService.create(body);
  }

  // ✅ READ (ทั้งหมด)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // ✅ READ (ตาม ID)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // ✅ UPDATE
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name?: string; email?: string },
  ) {
    return this.usersService.update(id, body);
  }

  // ✅ DELETE
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
