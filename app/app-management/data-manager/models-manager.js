//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

//your app-wide models here

import {v1 as uuidv1} from 'uuid';

export function User() {
  this.model = {
    id: uuidv1(),
    name: null,
    email: null,
    username: null,
    status_ref_key_key: null,
    status_ref_key_value: null,
  }
  return this.model;
}

export function UserCredentials() {
  this.model = {
    id: uuidv1(),
    name: null,
    email: null,
    username: null,
    status_ref_key_key: null,
    status_ref_key_value: null,
  }
  return this.model;
}

export function Recipe() {
  this.model = {
    id: uuidv1(),
    name: null,
    is_vegetarian: null,
    is_vegan: null,
    ingredients: [],
    cooking_instructions: [],
    groups_suitable: [],
    date_created: (new Date()).toISOString(),
    status_ref_key_key: null,
    status_ref_key_value: null,
  }
  return this.model;
}
