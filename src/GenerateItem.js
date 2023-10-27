import React from 'react';

export function generateItemLua(itemVars, itemID = 'test_item', download = false, includeExamples = false) {

	let lua = `${itemVars.map((variable) => {
		return `ITEM.${variable.name} = ${variable.type === 'string' ? `"${variable.value}"` : variable.value}`
	}).join('\n')}
	${includeExamples ? `\n\nfunction ITEM:GetDescription() -- Returns the description of the item
	<lua_tab>return self.description
	end

	ITEM.functions.Use = { -- Item function example
	<lua_tab>OnRun = function(item)
	<lua_tab><lua_tab>local client = item.player
	<lua_tab><lua_tab>client:SetHealth(client:Health() + 5)
	<lua_tab><lua_tab>client:ChatPrint("You feel refreshed!")
	<lua_tab><lua_tab>return true
	<lua_tab>end,
  <lua_tab>OnCanRun = function(item) -- Returns whether or not the player can use the function
  <lua_tab><lua_tab>return true
  <lua_tab>end
	}` : ''}
	
  `;

	lua = lua.replace(/^[ \t]+/gm, '');
  if (download) {
		downloadItemLua(lua, itemID)
	}
  return lua
}

function downloadItemLua(lua, itemID) {
  let formattedLua = lua.replace(/<lua_tab>/g, '\t')
  const blob = new Blob([formattedLua], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = `sh_${itemID}.lua`;
	a.click();
	URL.revokeObjectURL(url);
}

export function generatePreviewLua(lua) {
  const lines = lua.split('\n');
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {line.replace(/<lua_tab>/g, '\t')}
      <br />
    </React.Fragment>
  ));
}
