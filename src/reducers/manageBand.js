export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random()*10000000000000000,
        name: action.name
      };
      return { bands: state.bands.concat(band) };

    case 'DELETE_BAND':
      console.log('bands', state);
      console.log('action', action);
      return {bands: state.bands.filter(band => band.id !== action.band)}


    default:
      return state;
  }
};
