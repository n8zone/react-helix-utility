export function generateRecipeLua(name, desc, category, model, req, results, tools, id = 'test_recipe') {

	let lua = `RECIPE.name = "${name}"
  RECIPE.description = "${desc}"
  RECIPE.model = "${model}"
  RECIPE.category = "${category}"
  RECIPE.requirements = {
    ["water"] = 1
  }

  RECIPE.results = {
    ${results.map((item) => {
      return `<lua_tab>["${item.itemID}"] = ${item.quantity}`;
    }).join(',\n')}
  }

  RECIPE.tools = {
    "cid"
  }
  `;

	lua = lua.replace(/^[ \t]+/gm, '');
  //downloadRecipeLua(lua, id)
  return lua
}

function downloadRecipeLua(lua, itemID) {
  let formattedLua = lua.replace(/<lua_tab>/g, '\t')
  const blob = new Blob([formattedLua], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = `sh_${itemID}.lua`;
	a.click();
	URL.revokeObjectURL(url);
}



