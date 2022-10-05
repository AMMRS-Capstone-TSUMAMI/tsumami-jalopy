package tsumami.tsumamijalopy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository {
    public interface UsersRepository extends JpaRepository<User, Long> {
        User findByUserName(String userName);
        User findByEmail(String email);
    }
}
