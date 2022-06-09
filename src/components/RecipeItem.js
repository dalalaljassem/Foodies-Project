import { Button, Card, Col } from "react-bootstrap";

function RecipeItem({ recipe }) {
  return (
    <div className="one-recipe">
      <img className="one-recipe-img" src={recipe.image} />
      <div>{recipe.name}</div>
    </div>
  );
}

export default RecipeItem;
