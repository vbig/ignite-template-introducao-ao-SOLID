import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) throw new Error("User not exists");

    if (!user.admin) throw new Error("You are not an administrator");

    const users: User[] = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
