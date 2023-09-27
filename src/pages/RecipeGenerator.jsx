import React from 'react'
import { generateRecipeLua } from '../GenerateRecipe'
import { generatePreviewLua } from '../GenerateItem'
import Button from '../shared/Button'
import LuaPreview from '../components/LuaPreview'

import { useState } from 'react'

function RecipeGenerator() {
  const [previewLua, setPreviewLua] = useState('No Lua!')

  const handleRecipeGeneration = () => {
    
    setPreviewLua(generatePreviewLua(generateRecipeLua("test", "test", "test", "model", "test", [{itemID: 'melon', quantity: 2}, {itemID: 'glue', quantity: 1}], "tool")))
  }

  return (
    <div className='flex flex-col'>
      Recipe Generator
      <Button onClick={handleRecipeGeneration}>Download</Button>
      <LuaPreview>{previewLua}</LuaPreview>
    </div>
  )
}

export default RecipeGenerator