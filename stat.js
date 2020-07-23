var jsonSource = "https://spreadsheets.google.com/feeds/list/1zGubEAD3E0o-OEc1T0zrhpAWLzxY3kCqaIj0b_o1roc/1/public/values?alt=json"
  
  $.getJSON( jsonSource, function() {
    $("<p>json request successful</p>").prependTo("#container");
  })

  .done(function(data) { 
    if (data.feed.entry.length > 0) {
      $.each( data.feed.entry, function( i, item ) {
        var $joueurs = item.gsx$joueurs.$t;
        var $pourcentage = item.gsx$pourcentage.$t;
        
    
        
        $("<p>" + $joueurs+ 
          "</p><p>" + $pourcentage+ 
            "</p>").appendTo("#stats");
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