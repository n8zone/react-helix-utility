import React from 'react'
import Card from '../shared/Card'

import { useState } from 'react'

import LuaPreview from '../components/LuaPreview'

import InputLabelPair from '../shared/InputLabelPair'
import Button from '../shared/Button'

import { generateItemLua, generatePreviewLua } from '../GenerateItem'


function ItemGenerator() {

  const [newVarName, setNewVarName] = useState('')
  const [newVarType, setNewVarType] = useState('')
  const [itemVars, setItemVars] = useState([
    {
      name: 'name',
      type: 'string',
      value: 'blank',
    },
    {
      name: 'description',
      type: 'string',
      value: 'Default Description',
    },
    {
      name: 'category',
      type: 'string',
      value: 'Helix Web Util',
    },
    {
      name: 'model',
      type: 'string',
      value: 'models/props_c17/oildrum001.mdl',
    },

  ])

  const inputTypes = {
    'string': 'text',
    'number': 'number',
    'boolean': 'checkbox',
    'color': 'color',
  }

  const [previewLua, setPreviewLua] = useState(generatePreviewLua(generateItemLua(itemVars, getItemUniqueID())))

  
  function handleItemGeneration(e) {
    e.preventDefault()
    setPreviewLua(generatePreviewLua(generateItemLua(itemVars, getItemUniqueID())))
  }

  function handleItemDownload() {
    generateItemLua(itemVars, getItemUniqueID(), true)
  }

  function updateItemVar(name, value) {
    setItemVars(prevItemVars => {
      return prevItemVars.map(itemVar => 
        itemVar.name === name 
          ? { ...itemVar, value: value } 
          : itemVar
      )
    })
  }

  function getItemVarByName(name) {
    return itemVars.find(itemVar => itemVar.name === name)
  }

  const handleVarUpdate = (e) => {
    e.preventDefault()
    const newValue = e.target.value
  }

  const handleNewVarNameChange = (e) => {
    e.preventDefault()
    const newValue = e.target.value
    setNewVarName(newValue)
  }

  const handleNewVarTypeChange = (e) => {
    e.preventDefault()
    const newValue = e.target.value
    setNewVarType(newValue)
  }

  const handleNewItemVar = (e) => {
    e.preventDefault()
    const newValue = {
      name: newVarName,
      type: newVarType,
      value: '',
    }
    setItemVars([...itemVars, newValue])
  }

  function getItemUniqueID() {
    // make name lowercase, replace spaces with underscores
    const uniqueID = getItemVarByName('name').value.toLowerCase().replaceAll(' ', '_')
    return uniqueID
  }

  return (
    <div className='text-white  m-auto h-full flex justify-center items-center flex-col gap-5 bg-slate-400 text-2xl'>
      <div>
      <Card bgColor={'bg-slate-800'}>
        <form onSubmit={handleItemGeneration} className='flex flex-col gap-2 px-4 py-2 w-96'>
          {itemVars.map((itemVar, index) => {
            return(
              <InputLabelPair key={index} text={itemVar.name} inputType={inputTypes[itemVar.type]} onChange={(e) => {
                const value = itemVar.type === 'boolean' ? e.target.checked : e.target.value;
                updateItemVar(itemVar.name, value);
              }} />
            )
          })}
          <Button type='submit'>Generate</Button>
        </form>
      </Card>
      <Card bgColor={'bg-slate-800'}>
        <form onSubmit={handleNewItemVar} className='flex flex-col gap-2 px-4 py-2'>
          <InputLabelPair text='Variable Name' inputType={'text'} onChange={handleNewVarNameChange} />
          <select className='flex flex-col mb-2 mx-4' onChange={handleNewVarTypeChange}>
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
            <option value="color">Color</option>
          </select>
          <Button type='submit'>Add</Button>
        </form>
      </Card>
      </div>
      <h1 className='mb-0 pb-0'>File Preview : {`sh_${getItemUniqueID()}.lua`}</h1>
      <Button onClick={handleItemDownload}>Download</Button>
      <LuaPreview>{previewLua}</LuaPreview>
    </div>
  )
}

export default ItemGenerator