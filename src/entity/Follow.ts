import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity("follows")
export class Follow extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  followerId: string;

  @Column("uuid")
  followedId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "followedId" })
  followed: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: "followerId" })
  follower: User;

  @CreateDateColumn()
  createdAt: string;
}
