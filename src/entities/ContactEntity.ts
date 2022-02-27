import {
  Entity, PrimaryGeneratedColumn, Column
} from "typeorm";

@Entity('contacts')
export default class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

}