$( function() {
  var
    from = $( "#start" ).datepicker()
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
        var date = $(this).datepicker('getDate');
        $( "#start-d" ).text( date.getDate() );
        $( "#start-m" ).text( date.getMonth() + 1 );
        $( "#start-y" ).text( date.getFullYear() );
      }),
    to = $( "#fin" ).datepicker()
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
        var date = $(this).datepicker('getDate');
        $( "#fin-d" ).text( date.getDate() );
        $( "#fin-m" ).text( date.getMonth() + 1 );
        $( "#fin-y" ).text( date.getFullYear() );
      });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( "mm/dd/yy", element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );
