(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{407:function(e,n){e.exports=function(e){var n={className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE]},s={className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE],relevance:0},a={className:"type",begin:"\\b_?[A-Z][\\w]*",relevance:0},i={begin:e.IDENT_RE+"'",relevance:0};return{keywords:{keyword:"actor addressof and as be break class compile_error compile_intrinsicconsume continue delegate digestof do else elseif embed end errorfor fun if ifdef in interface is isnt lambda let match new not objector primitive recover repeat return struct then trait try type until use var where while with xor",meta:"iso val tag trn box ref",literal:"this false true"},contains:[{className:"class",beginKeywords:"class actor",end:"$",contains:[e.TITLE_MODE,e.C_LINE_COMMENT_MODE]},{className:"function",beginKeywords:"new fun",end:"=>",contains:[e.TITLE_MODE,{begin:/\(/,end:/\)/,contains:[a,i,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]},{begin:/:/,endsWithParent:!0,contains:[a]},e.C_LINE_COMMENT_MODE]},a,{className:"string",begin:'"""',end:'"""',relevance:10},n,s,i,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_pony-ca8f8a1e5f56fcc31444.js.map