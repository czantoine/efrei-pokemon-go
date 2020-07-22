var jsonSource = "https://spreadsheets.google.com/feeds/list/1zGubEAD3E0o-OEc1T0zrhpAWLzxY3kCqaIj0b_o1roc/1/public/values?alt=json"
  
  $.getJSON( jsonSource, function() {
    $("<p>json request successful</p>").prependTo("#container");
  })

  .done(function(data) { 
    if (data.feed.entry.length > 0) {
      $.each( data.feed.entry, function( i, item ) {
        var $horodateur = item.gsx$horodateur.$t;
        var $pseudo = item.gsx$pseudo.$t;
        var $promo = item.gsx$promo.$t;
        var $team = item.gsx$team.$t;
        var $lvl = item.gsx$lvl.$t;
        var $codeami = item.gsx$codeami.$t;
        var $docLink;
        
        
        $("<tr><td>" + $horodateur + 
            "</td><td>" + $pseudo+ 
            "</td><td>" + $promo + 
            "</td><td>" + $team + 
            "</td><td>" + $lvl + 
            "</td><td>" + $codeami + 
            "</td></tr>").appendTo("#loans tbody");
      });
    } else {
      $("<p>JSON request succeeded but no data returned.</p>").prependTo("#container");
    }
  })
  
  .fail(function() {
    $("<p>JSON request fail</p>").prependTo("#container");
  })
  
  .error(function() {
    $("<p>JSON request error</p>").prependTo("#container");
  });