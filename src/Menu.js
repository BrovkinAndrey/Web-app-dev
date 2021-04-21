import Recipe from './Recipe'
import React, {useState} from 'react'

const Menu = ({ recipes }) => {
const [recipeName, setRecipeName] = useState('');

const handleInput = (e) => {
    if (e.target.value) {
        setRecipeName(e.target.value);
    } else {
        setRecipeName('');
    }
}

return(
    <article>
        <header>
            <h1>Вкусные рецепты</h1>
            <input type="text" value={recipeName} onChange={handleInput}/>
        </header>
        <div className="recipes">
            { recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>
)
}
export default Menu