import Recipe from './Recipe'
import RecipeList from './RecipeList'
import React, {useState, useEffect} from 'react'

const Menu = ({ recipes }) => {
const [inputName, setInputName] = useState('');
const [recipeName, setRecipeName] = useState(recipes);

useEffect(() => {
    if (inputName) {
        switch (recipeName.length) {
            case 1: 
                document.title = `Выбор сделан!`;
                break;
            case 2: 
            case 3: 
            case 4: 
                document.title = `Найдено ${recipeName.length} рецепта`;
                break;
            default: 
                document.title = `Найдено ${recipeName.length} рецептов`;
        }
    } else {
        document.title = 'Выбери свой ужин!'
    }
    
  }); 

const handleInput = (e) => {
    if (e.target.value) {
        setInputName(e.target.value);
        const options = recipes.filter(res => {
            const regex = new RegExp(e.target.value, 'gi');
            return res.name.match(regex);
        });
        setRecipeName(options);
    } else {
        setInputName('');
        setRecipeName(recipes);
    }
}

return(
    <article>
        <header>
            <h1>Вкусные рецепты</h1>
            <input type="text" value={inputName} onChange={handleInput}/>
        </header>
        {recipeName.length === 1 
            ?   <div className="recipes">
                    { recipeName.map((recipe, i) =>
                        <Recipe key={i} {...recipe} />)
                    }
                </div>
            :   <div className="recipes">
                    { recipeName.map((recipe, i) =>
                        <RecipeList key={i} name={recipe.name} />)
                    }
                </div>
        }
    </article>
    )
}
export default Menu