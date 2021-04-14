import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({ name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1 className="header">{name}</h1>
        <IngredientsList list={ingredients} />
        <Instructions title="Инструкция по приготовлению"
            steps={steps} />
    </section>

export default Recipe