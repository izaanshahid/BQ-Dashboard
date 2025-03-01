var substringMatcher = function(strs) {
 return function findMatches(q, cb) {
   var matches, substringRegex;

   // an array that will be populated with substring matches
   matches = [];

   // regex used to determine if a string contains the substring `q`
   var substrRegex = new RegExp(q, 'i');

   // iterate through the pool of strings and for any string that
   // contains the substring `q`, add it to the `matches` array
   $.each(strs, function(i, str) {
     if (substrRegex.test(str)) {
       matches.push(str);
     }
   });

   cb(matches);
 };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('#the-basics .typeahead').typeahead({
 hint: true,
 highlight: true,
 minLength: 1
},
{
 name: 'states',
 source: substringMatcher(states)
});




var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // url points to a json file that contains an array of country names, see
  // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
  prefetch: '../../assets/js/data/countries.json'
});

// passing in `null` for the `options` arguments will result in the default
// options being used
$('#prefetch .typeahead').typeahead(null, {
  name: 'countries',
  source: countries
});


// bloodhound
var states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // `states` is an array of state names defined in "The Basics"
  local: states
});

$('#bloodhound .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: states
});


$('#scrollable-dropdown-menu .typeahead').typeahead(null, {
  name: 'countries',
  limit: 10,
  source: countries
});