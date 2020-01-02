import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CatsEntity } from 'src/cats/cats.entity';

@Entity()
export class OwnerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @ManyToOne(type => CatsEntity, cat => cat.id, {
        onDelete: 'CASCADE',
    })
    catId: CatsEntity;
}
