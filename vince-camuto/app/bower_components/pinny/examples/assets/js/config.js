require.config({
    baseUrl: '../',
    paths: {
        'text': 'bower_components/requirejs-text/text',
        '$': 'lib/zeptojs/dist/zepto',
        'bouncefix': 'bower_components/bouncefix.js/dist/bouncefix.min',
        'velocity': 'bower_components/mobify-velocity/velocity',
        'modal-center': 'dist/effect/modal-center',
        'sheet-bottom': 'dist/effect/sheet-bottom',
        'sheet-left': 'dist/effect/sheet-left',
        'sheet-right': 'dist/effect/sheet-right',
        'sheet-top': 'dist/effect/sheet-top',
        'plugin': 'bower_components/plugin/dist/plugin.min',
        'shade': 'bower_components/shade/dist/shade.min',
        'lockup': 'bower_components/lockup/src/js/lockup',
        'deckard': 'bower_components/deckard/dist/deckard.min',
        'event-polyfill': 'dist/utils/event-polyfil',
        'isChildOf': 'bower_components/selector-utils/src/selector/isChildOf',
        'pinny': 'src/js/pinny'
    },
    'shim': {
        '$': {
            exports: '$'
        }
    }
});
