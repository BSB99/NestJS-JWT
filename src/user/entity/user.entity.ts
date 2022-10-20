import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    no: number;

    @Column({
        unique: true,
        type: 'varchar',
        length: 255
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 255
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    name: string;
}