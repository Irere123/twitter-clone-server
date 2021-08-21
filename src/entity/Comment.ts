import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Tweet } from "./Tweet";
import { User } from "./User";

@Entity("comments")
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  body: string;

  @Column("uuid")
  userId: string;

  @Column("uuid")
  tweetId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Tweet)
  @JoinColumn({ name: "tweetId" })
  tweet: Tweet;

  @CreateDateColumn()
  createdAt: string;
}
