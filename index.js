var recipes = {prop : 1};

function updateObjectWithKeyAndValue(recipes) {
return Object.assign({}, recipes, { prop2 : 2});
}  

function destructivelyUpdateObjectWithKeyAndValue(recipes){
recipes.prop2 = 2;
return recipes;
}

function deleteFromObjectByKey(recipes){
var newRecipes = Object.assign({}, recipes);
delete newRecipes.prop[1];
return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes){
delete recipes.prop;
return recipes;
}