import {
  Entity, PrimaryGeneratedColumn, Column,
} from "typeorm";

import { Contact } from '../protocols/Contact';
import * as contactService from "../services/contactService";

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
