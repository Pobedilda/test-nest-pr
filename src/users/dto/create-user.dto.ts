import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto{
  @ApiProperty({example: "somemail@gmail.com", description: "user mail"})
  readonly email: string;
  @ApiProperty({example: "pass", description: " user password"})
  readonly password: string;
}