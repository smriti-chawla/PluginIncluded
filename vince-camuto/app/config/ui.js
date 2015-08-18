/**
 * RequireJS paths for the ui bundle
 */

require.config({
    'paths': {
        'fastclick': 'bower_components/fastclick/lib/fastclick',
        'deckard': 'bower_components/deckard/dist/deckard.min',
        'pikabu': 'bower_components/pikabu/build/pikabu.min',
        'pre-tag': 'bower_components/pre-tag/index'
    },
    'shim': {
        'pikabu': {
            'exports': 'Pikabu'
        }
    }
});
