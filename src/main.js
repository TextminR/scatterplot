import './style.css';
import Scatterplot from './deepscatter';

const prefs = {
  source_url: import.meta.env.VITE_URL_TILES,
  max_points: 10000,
  alpha: 10.12,
  zoom_balance: 0.12,
  point_size: 5,
  background_color: '#172554',
  click_function:
    // "select('#ident').html(JSON.stringify(datum, undefined, 2))",
    null,
  encoding: {
    jitter_radius: {
      constant: 0.001,
      method: 'normal',
    },
    color: {
      field: 'topic',
      range: 'category10'
    },
    x: {
      field: 'x',
      transform: 'literal',
    },
    y: {
      field: 'y',
      transform: 'literal',
    },
  },
  labels: {
    url: import.meta.env.VITE_URL_GEOJSON,
    name: undefined,
    label_field: 'topic',
    size_field: undefined,
  },
};

const scatterplot = new Scatterplot('#deepscatter');
scatterplot.plotAPI(prefs);