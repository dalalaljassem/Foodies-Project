function Ingredientitem({ ingredient }) {
  return (
    <>
      <div>
        {/* <div className="ing-name">{ingredient.name}</div> */}
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="ing-item"
            class="form-check-label"
            for="flexCheckDefault"
          >
            {ingredient.name}
          </label>
        </div>
      </div>
    </>
  );
}

export default Ingredientitem;
