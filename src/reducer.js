import uuid from 'uuid'

// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE"
}

export const actionCreators = {
  add: item => {
    return { type: types.ADD, payload: item }
  },
  remove: index => {
    return { type: types.REMOVE, payload: index }
  }
}

const initialState = {
  projects: [
    {
      id: uuid.v4(),
      title: 'Business Website',
      category: 'Web Design'
    },
    {
      id: uuid.v4(),
      title: 'Social App',
      category: 'Mobile Development'
    },
    {
      id: uuid.v4(),
      title: 'Ecommerce Shopping Cart',
      category: 'Web Development'
    }
  ]
}

export const reducer = (state = initialState, action) => {
  const { projects } = state;
  const { type, payload } = action;
  switch (type) {
    case types.ADD: {
      payload.id = uuid.v4()
      return {
        ...state,
        projects: [payload, ...projects]
      }
    }
    case types.REMOVE: {
      return {
        ...state,
        projects: projects.filter((project) => project.id !== payload)
      }
    }
  }
  return state
}
