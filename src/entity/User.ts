import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import { Tweet } from "./Tweet";
import { Comment } from "./Comment";
import { Follow } from "./Follow";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "int", default: 0 })
  count: number;

  @Column({ type: "varchar" })
  firstName: string;

  @Column({ type: "varchar" })
  lastName: string;

  @Column({ type: "varchar" })
  displayName: string;

  @Column({ type: "text" })
  password: string;

  @CreateDateColumn()
  createdAt: string;

  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets: Tweet[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Follow, (followers) => followers.follower)
  followers: Follow;

  @OneToMany(() => Follow, (followed) => followed.followed)
  followed: Follow;

  @BeforeInsert()
  addDName() {
    this.displayName = `${this.firstName}COOL`;
  }
}
