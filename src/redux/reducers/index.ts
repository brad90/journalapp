import { UPDATE_CURRENT_LOG } from '../constants';

const initialState: LogOptionState = {
	option: {
		id: null,
		title: '',
		text: '',
		date: new Date()
}

const reducer = (
  state: LogOptionState = initialState,
  action: LogOptionAction
): LogOptionState => {
  switch (action.type) {
    case UPDATE_CURRENT_LOG:
      const option: LogOption = {
        id: action.payload.id
        title: action.article.title,
        body: action.article.body,
      }
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      }
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        article => article.id !== action.article.id
      )
      return {
        ...state,
        articles: updatedArticles,
      }
  }
  return state
}

export default reducer
