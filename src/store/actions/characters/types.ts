import { CharactersStructure } from "../../../data/types";

export enum CharactersActionType {
  defaultAction,
  loadCharacters,
}

export interface CharactersAction {
  type: CharactersActionType;
  payload?: unknown;
}

export interface LoadCharactersAction extends CharactersAction {
  payload: CharactersStructure;
}
