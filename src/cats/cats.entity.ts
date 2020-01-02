import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OwnerEntity } from 'src/owner/owner.entity';

@Entity()
export class CatsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @OneToMany(type => OwnerEntity, owner => owner.id, {
        onDelete: 'CASCADE',
    }) // note: we will create author property in the Photo class below
    photos: OwnerEntity[];
}
