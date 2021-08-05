import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyInUse = this.usersRepository.findByEmail(email);

    if (emailAlreadyInUse)
      throw new Error("The email you entered is already in use");

    const user: User = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
