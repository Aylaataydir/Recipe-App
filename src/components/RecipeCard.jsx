
import prepTime from "../assets/images/icon-prep-time.svg"
import cookTime from "../assets/images/icon-cook-time.svg"
import servingsImg from "../assets/images/icon-servings.svg"

const RecipeCard = ({ recipe }) => {
  const { image, title, cookMinutes, servings, prepMinutes, overview } = recipe


  return (
    <div className="rounded-b-lg bg-white p-2">
      <img src={image.large} alt="" />
      <h2 className="text-preset-5 text-neutral-900 mb-2.5">{title}</h2>
      <p className="text-preset-9 text-neutral-800">{overview}</p>
      <div className="flex flex-wrap my-4 ">
        <p className="flex items-center gap-1 text-neutral-900 text-preset-9"><img src={servingsImg} alt=""/>Servings: <span>{servings} </span>mins</p>
        <p className="flex items-center gap-1 text-neutral-900 text-preset-9 ms-4"><img src={prepTime} alt="" />Prep: <span>{prepMinutes} </span>mins</p>
        <p className="flex items-center gap-1 text-neutral-900 text-preset-9 mt-2"><img src={cookTime} alt="" />Cook: <span>{cookMinutes} </span>mins</p>
      </div>
      <button className="btn w-full rounded-full">View Recipe</button>
    </div>
  )
}

export default RecipeCard