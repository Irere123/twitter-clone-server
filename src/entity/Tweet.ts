import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity("tweets")
export class Tweet extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  body: string;

  @Column("uuid")
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.tweet)
  comments: Comment[];

  @CreateDateColumn()
  createdAt: string;
}
