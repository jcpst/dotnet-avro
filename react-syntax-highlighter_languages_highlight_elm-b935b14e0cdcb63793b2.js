(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{333:function(e,n){e.exports=function(e){var n={variants:[e.COMMENT("--","$"),e.COMMENT("{-","-}",{contains:["self"]})]},i={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},o={begin:"\\(",end:"\\)",illegal:'"',contains:[{className:"type",begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},n]};return{keywords:"let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",contains:[{beginKeywords:"port effect module",end:"exposing",keywords:"port effect module where command subscription exposing",contains:[o,n],illegal:"\\W\\.|;"},{begin:"import",end:"$",keywords:"import as exposing",contains:[o,n],illegal:"\\W\\.|;"},{begin:"type",end:"$",keywords:"type alias",contains:[i,o,{begin:"{",end:"}",contains:o.contains},n]},{beginKeywords:"infix infixl infixr",end:"$",contains:[e.C_NUMBER_MODE,n]},{begin:"port",end:"$",keywords:"port",contains:[n]},{className:"string",begin:"'\\\\?.",end:"'",illegal:"."},e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,i,e.inherit(e.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}],illegal:/;/}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_elm-b935b14e0cdcb63793b2.js.map