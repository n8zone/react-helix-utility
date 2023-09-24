import React from 'react';

export function generateItemLua(itemName, itemDesc, itemCategory, itemModel, itemID = 'test_item') {

	let lua = `ITEM.name = "${itemName}"
  ITEM.description = "${itemDesc}"
	ITEM.category = "${itemCategory}"
  ITEM.model = "${itemModel}"

	function ITEM:GetDescription()
	<lua_tab>return self.description
	end

	ITEM.functions.Use = {
	<lua_tab>OnRun = function(item)
	<lua_tab><lua_tab>local client = item.player
	<lua_tab><lua_tab>client:SetHealth(client:Health() + item.health)
	<lua_tab><lua_tab>client:ChatPrint("You feel refreshed!")
	<lua_tab><lua_tab>return true
	<lua_tab>end
	}
  `;

	lua = lua.replace(/^[ \t]+/gm, '');
  //downloadItemLua(lua, itemID)
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
