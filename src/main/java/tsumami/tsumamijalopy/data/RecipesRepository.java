package tsumami.tsumamijalopy.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface RecipesRepository extends JpaRepository<Recipe, Long> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO plan_timeslot_recipe (plan_timeslot_id, recipe_id) " +
            "VALUES " +
            "    (:plan_timeslot_id, :recipe_id)", nativeQuery = true)
    void insertTimeslotRecipe(@Param("plan_timeslot_id") Long planTimeslotId, @Param("recipe_id") Long id);
    @Transactional
    @Modifying
    @Query(value = "INSERT IGNORE INTO recipes (id, name, photo) " +
            "VALUES " +
            "    (:id, :name, :photo)", nativeQuery = true)
    void insertRecipe(@Param("id") Long recipeId, @Param("name") String recipeName, @Param("photo") String image);


//    In progress for recipes view
//    need to getRecipeById here


}
