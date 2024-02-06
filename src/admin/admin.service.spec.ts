// import { Test, TestingModule } from '@nestjs/testing';
// import { AdminService } from './admin.service';
// import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
// import * as schema from '../db/schemas';
// import { CreateAdminDto } from './dto/create-admin.dto';


// describe('AdminService', () => {
//   let service: AdminService;
//   let mockDatabase: Partial<BetterSQLite3Database<typeof schema>>;

//   beforeEach(async () => {
//     mockDatabase = {
//       query: {
//         admin: {
//           findFirst: jest.fn().mockResolvedValue(null)
//         },
//       },
//       insert: jest.fn().mockResolvedValue(null),
//     } as any;

//     const module: TestingModule = await Test.createTestingModule({
//       providers: [AdminService],
//     }).compile();

//     service = module.get<AdminService>(AdminService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   it('should create a new admin', async () => {
//     const dto: CreateAdminDto = {
//       email: 'test@example.com',
//       password: 'password123',
//       name: 'test'
//     };

//     await expect(service.create(dto)).resolves.toBeUndefined();
//   });
// });
