const params = {
  'particles': {
    'number': {
      'value': 40,
      'density': {
        'enable': false,
        'value_area': 200
      }
    },
    'color': {
      'value': '#ffffff'
    },
    'shape': {
      'type': 'circle',
      'stroke': {
        'width': 0,
        'color': '#000000'
      },
      'polygon': {
        'nb_sides': 5
      },
      'image': {
        'src': 'img/github.svg',
        'width': 100,
        'height': 100
      }
    },
    'opacity': {
      'value': 0.4,
      'random': true,
      'anim': {
        'enable': true,
        'speed': 1,
        'opacity_min': 0,
        'sync': false
      }
    },
    'size': {
      'value': 10,
      'random': false,
      'anim': {
        'enable': false,
        'speed': 4,
        'size_min': 0.3,
        'sync': false
      }
    },
    'line_linked': {
      'enable': true,
      'distance': 150,
      'color': '#ffffff',
      'opacity': 0.4,
      'width': 2
    },
    'move': {
      'enable': false,
      'speed': 0.01,
      'direction': 'none',
      'random': false,
      'straight': false,
      'out_mode': 'out',
      'bounce': false,
      'attract': {
        'enable': false,
        'rotateX': 600,
        'rotateY': 600
      }
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': false,
        'mode': 'bubble'
      },
      'onclick': {
        'enable': true,
        'mode': 'repulse'
      },
      'resize': true
    },
    'modes': {
      'grab': {
        'distance': 400,
        'line_linked': {
          'opacity': 1
        }
      },
      'bubble': {
        'distance': 250,
        'size': 0,
        'duration': 2,
        'opacity': 0,
        'speed': 3
      },
      'repulse': {
        'distance': 400,
        'duration': 0.4
      },
      'push': {
        'particles_nb': 4
      },
      'remove': {
        'particles_nb': 2
      }
    }
  },
  'retina_detect': true
}

export default params
