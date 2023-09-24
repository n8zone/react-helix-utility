import React from 'react'
import Card from '../shared/Card'

import { useState } from 'react'

import LuaPreview from '../components/LuaPreview'

import InputLabelPair from '../shared/InputLabelPair'
import Button from '../shared/Button'

import { generateItemLua, generatePreviewLua } from '../GenerateItem'


function ItemGenerator() {
  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [itemModel, setItemModel] = useState('')

  const [previewLua, setPreviewLua] = useState('No Lua Generated!')

  const handleNameChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue)
    setItemName(newValue)
  }

  const handleDescriptionChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue)
    setItemDescription(newValue)
  }

  const handleCategoryChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue)
    setItemCategory(newValue)
  }

  const handleModelChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue)
    setItemModel(newValue)
  }

  const handleItemGeneration = (e) => {
    e.preventDefault()
    const item = {
      itemName,
      itemDescription,
      itemCategory,
      itemModel,
    }
    
    setPreviewLua(generatePreviewLua(generateItemLua(itemName, itemDescription, itemCategory, itemModel)))
    console.log(item)
  }

  return (
    <div className='text-white  m-auto h-full flex justify-center items-center flex-col gap-5 bg-slate-400 text-2xl'>
      <div>
      <Card bgColor={'bg-slate-800'}>
        <form onSubmit={handleItemGeneration} className='flex flex-col gap-2 px-4 py-2'>
          <InputLabelPair text='Item Name' inputType={'text'} onChange={handleNameChange} />
          <InputLabelPair text='Item Description' inputType={'text'} onChange={handleDescriptionChange} />
          <InputLabelPair text='Item Category' inputType={'text'} onChange={handleCategoryChange} />
          <InputLabelPair text='Item Model' inputType={'text'} onChange={handleModelChange} />
          <Button type='submit'>Generate</Button>
        </form>
      </Card>
      <Card bgColor={'bg-slate-800'}>
        <form onSubmit={handleItemGeneration} className='flex flex-col gap-2 px-4 py-2'>
          <InputLabelPair text='Variable Name' inputType={'text'} onChange={handleNameChange} />
          <Button type='submit'>Add</Button>
        </form>
      </Card>
      </div>
      <LuaPreview>{previewLua}</LuaPreview>
    </div>
  )
}

export default ItemGenerator