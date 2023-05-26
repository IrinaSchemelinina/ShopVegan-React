const localStorageUsersKey = "test_user_data"
const localStorageLoginnedUserKey = "test_user_loginned"

export const getUsersFromLocalStorage = email => {
  const allValues = JSON.parse(getUsersFromLocalStorageString())
  if (!allValues || !allValues.length) return undefined
  if (!email) return allValues
  return allValues.filter(item => item.email === email)
}

export const getUsersFromLocalStorageString = () => localStorage.getItem(localStorageUsersKey)

export const setUsersInLocalStorage = (data) => {
  if (getUsersFromLocalStorageString()) {
    localStorage.setItem(localStorageUsersKey, JSON.stringify([
      ...getUsersFromLocalStorage(),
      data,
    ]))
  } else {
    localStorage.setItem(localStorageUsersKey, JSON.stringify([data]))
  }
}

export const setLoginnedUserToLocalStorage = email =>
  localStorage.setItem(localStorageLoginnedUserKey, email)

export const checkLoginnedUser = () =>
  localStorage.getItem(localStorageLoginnedUserKey)

export const checkLoginnedUserToLocalStorage = email => checkLoginnedUser() === email

export const logout = () => localStorage.removeItem(localStorageLoginnedUserKey)
