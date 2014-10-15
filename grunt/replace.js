module.exports = {
    replace:
    {
        src: [
            "build/index.html"
        ],
        overwrite: true,
        replacements: [ {
            from: 'build/',
            to: function ( matched )
            {
                return "";
            }
        }]
    }
};