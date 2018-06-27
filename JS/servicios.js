$(document).ready(function () {
    var engine = new Bloodhound({
        local: [{
            value: 'red'
        }, {
            value: 'blue'
        }, {
            value: 'green'
        }, {
            value: 'yellow'
        }, {
            value: 'violet'
        }, {
            value: 'brown'
        }, {
            value: 'purple'
        }, {
            value: 'black'
        }, {
            value: 'white'
        }],
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.value);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace
    });

    engine.initialize();

    $('#tokenfield-typeahead').tokenfield({
        typeahead: [null, {
            source: engine.ttAdapter()

        }]
    });
})