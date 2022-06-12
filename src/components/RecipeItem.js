import { Button, Card, Col } from "react-bootstrap";

function RecipeItem({ recipe, category }) {
  return (
    <div className="one-recipe">
      <img className="one-recipe-img" src={recipe?.image} />
      <div className="recipe-name">{recipe?.name}</div>
      <div className="recipe-desc">{category?.name}</div>
    </div>
  );
}

export default RecipeItem;
