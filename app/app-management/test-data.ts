import {Recipe, RecipeImage} from "./data-manager/models-manager";
import {RecipeGroupsSuitable} from "./data-manager/list-manager";

export const TEST_RECIPES: Array<Recipe> = [
    {
        id: 'qwertyytrewqqwertyytrewqqwerty1_', name: 'Jolof',
        is_vegetarian: false, is_vegan: false,
        ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C', 'Ingredient D',],
        cooking_instructions: ['Instruction A', 'Instruction B', 'Instruction C', 'Instruction D',],
        groups_suitable: [RecipeGroupsSuitable[0].code, RecipeGroupsSuitable[1].code, RecipeGroupsSuitable[2].code],
        date_created: (new Date(2020, 5, 13)).toISOString(), rating: 0,
        status_ref_key_key: 'STATUS', status_ref_key_value: 'ACT',
    },
    {
        id: 'qwertyytrewqqwertyytrewqqwerty2_', name: 'Lacatte',
        is_vegetarian: true, is_vegan: false,
        ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C', 'Ingredient D',],
        cooking_instructions: ['Instruction A', 'Instruction B', 'Instruction C', 'Instruction D',],
        groups_suitable: [RecipeGroupsSuitable[2].code, RecipeGroupsSuitable[3].code, RecipeGroupsSuitable[4].code],
        date_created: (new Date(2020, 5, 13)).toISOString(), rating: 0,
        status_ref_key_key: 'STATUS', status_ref_key_value: 'ACT',
    },
    {
        id: 'qwertyytrewqqwertyytrewqqwerty3_', name: 'Postir',
        is_vegetarian: true, is_vegan: true,
        ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C', 'Ingredient D',],
        cooking_instructions: ['Instruction A', 'Instruction B', 'Instruction C', 'Instruction D',],
        groups_suitable: [RecipeGroupsSuitable[0].code, RecipeGroupsSuitable[4].code, RecipeGroupsSuitable[1].code],
        date_created: (new Date(2020, 5, 13)).toISOString(), rating: 0,
        status_ref_key_key: 'STATUS', status_ref_key_value: 'ACT',
    },
    {
        id: 'qwertyytrewqqwertyytrewqqwerty4_', name: 'Casserole',
        is_vegetarian: false, is_vegan: false,
        ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C', 'Ingredient D',],
        cooking_instructions: ['Instruction A', 'Instruction B', 'Instruction C', 'Instruction D',],
        groups_suitable: [RecipeGroupsSuitable[4].code, RecipeGroupsSuitable[5].code],
        date_created: (new Date(2020, 5, 13)).toISOString(), rating: 0,
        status_ref_key_key: 'STATUS', status_ref_key_value: 'ACT',
    },
    {
        id: 'qwertyytrewqqwertyytrewqqwerty5_', name: 'Frijoles',
        is_vegetarian: true, is_vegan: true,
        ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C', 'Ingredient D',],
        cooking_instructions: ['Instruction A', 'Instruction B', 'Instruction C', 'Instruction D',],
        groups_suitable: [],
        date_created: (new Date(2020, 5, 13)).toISOString(), rating: 0,
        status_ref_key_key: 'STATUS', status_ref_key_value: 'ACT',
    },
];

export const TEST_RECIPES_PHOTOS: Array<RecipeImage> = [
    {
        id: '_1qwertyytrewqqwertyytrewqqwerty', recipe_id: TEST_RECIPES[0].id,
        image_url: '', image_file: ''
    },
    {
        id: '_2qwertyytrewqqwertyytrewqqwerty', recipe_id: TEST_RECIPES[1].id,
        image_url: '', image_file: ''
    },
    {
        id: '_3qwertyytrewqqwertyytrewqqwerty', recipe_id: TEST_RECIPES[2].id,
        image_url: '', image_file: ''
    },
    {
        id: '_4qwertyytrewqqwertyytrewqqwerty', recipe_id: TEST_RECIPES[3].id,
        image_url: '', image_file: ''
    },
    {
        id: '_5qwertyytrewqqwertyytrewqqwerty', recipe_id: TEST_RECIPES[4].id,
        image_url: '', image_file: ''
    },
];
