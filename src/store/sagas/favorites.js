import api from "../../services/api";
import { call, put, select } from "redux-saga/effects";

import { Creators as FavoriteActions } from "../ducks/favorites";

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);
    const favorites = yield select(state => state.favorites.data);
    if (favorites.find(favorites => favorites.id === response.data.id)) {
      yield put(FavoriteActions.addFavoriteError("Repositório Duplicado"));
    } else {
      yield put(FavoriteActions.addFavoriteSuccess(response.data));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoriteError("Repositório não existe"));
  }
}
