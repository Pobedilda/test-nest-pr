import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";

@ApiTags("User")
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {
  }
  @ApiOperation({summary: `User creation`})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    console.log(process.env.PORT)
    return this.userService.createUser(userDto);
  }
  @ApiOperation({summary: `Get Users`})
  @ApiResponse({status: 200, type: [User]})
  @Get('/getAllUsers')
  getAllUsers(){
    return this.userService.getAllUser();
  }
}
