import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class UsersService {

    /**
     *
     */
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>) {
    }
    /**
     *
     */

    async  findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async  create(User: User): Promise<User> {
        return await this.userRepository.save(User);
    }

    async update(User: User): Promise<UpdateResult> {
        return await this.userRepository.update(User.id, User);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
}
