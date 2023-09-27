import React from 'react'
import { generateRecipeLua } from '../GenerateRecipe'
import { generatePreviewLua } from '../GenerateItem'
import Button from '../shared/Button'
import LuaPreview from '../components/LuaPreview'

import { useState } from 'react'
import InputLabelPair from '../shared/InputLabelPair'
import Card from '../shared/Card'
import CardTitle from '../shared/CardTitle'

import ItemQuantityForm from '../shared/ItemQuantityForm'

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState([])
  const [tools, setTools] = useState([])
  const [results, setResults] = useState([])
  const [previewLua, setPreviewLua] = useState(generatePreviewLua(generateRecipeLua("test", "test", "test", "model", ingredients, results, tools)))


  const addIngredient = (newIngredient) => {
    const newValue = [...ingredients, newIngredient]
    setIngredients([...ingredients, newIngredient]);
    setPreviewLua(generatePreviewLua(generateRecipeLua("test", "test", "test", "model", newValue, results, tools)))
  };

  const addTool = (newTool) => {
    const newValue = [...tools, newTool]
    setTools([...tools, newTool])
    setPreviewLua(generatePreviewLua(generateRecipeLua("test", "test", "test", "model", ingredients, results, newValue)))
  };

  const addResult = (newResult) => {
    const newValue = [...results, newResult]
    setResults([...results, newResult]);
    setPreviewLua(generatePreviewLua(generateRecipeLua("test", "test", "test", "model", ingredients, newValue, tools)))
  };


  const handleRecipeGeneration = () => {
    
    setPreviewLua(generatePreviewLua(generateRecipeLua("test", "test", "test", "model", ingredients, results, tools)))
  }

  return (
    <div className='text-white  m-auto h-full flex justify-center items-center flex-col gap-5 bg-slate-400 text-2xl'>
      
      <div className='flex justify-around'>
        <ItemQuantityForm onSubmit={addIngredient} title='Ingredient'/>
        <ItemQuantityForm onSubmit={addTool} title='Tool' showQuantity={false}/>
        <ItemQuantityForm onSubmit={addResult} title='Result'/>
      </div>

      <LuaPreview>{previewLua}</LuaPreview>
      <Button onClick={handleRecipeGeneration}>Download</Button>
    </div>
  )
}

export default RecipeGenerator