import { Column, Model, DataType, Table } from "sequelize-typescript";
import { ApiOperation, ApiProperty } from "@nestjs/swagger";

interface UserCreationInterface {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationInterface> {
  @ApiProperty({example: 1, description: "unique value"})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ApiProperty({example: "somemail@gmail.com", description: "email"})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @ApiProperty({example: "password", description: "password value"})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @ApiProperty({example: "true", description: "boolean value"})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;
  @ApiProperty({example: "spam", description: "ban reason"})
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}