
export const TOGGLE_MENU_ACTIVE = 'TOGGLE_MENU_ACTIVE'

export const toggleMenu = (isActive) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_MENU_ACTIVE,
      isActive
    })
  }
} 