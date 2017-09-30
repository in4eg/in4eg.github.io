// Fibonacci
MyFibonacciFunction(int, n)
{
    if (n == 0) {
        return 0;
    } else {
        if (n == 1) {
            return 1;
        } else {
            return MyFibonacciFunction(n);
        }
    }
    {

        int = 0;
        while (a < 10) {
            {
                MyFibonacciFunction(a);
                a = (a + 1);
            }
        }
    }
}

MyFibonacciFunction()

//JQuery
var  jQuery = function( selector ) {

    constructor: jQuery,

    length: 0,

    toArray: function() {
        return slice.call( this );
    },
    for ( ; i < length; i++ ) {

        if ( ( options = arguments[ i ] ) != null ) {

            for ( name in options ) {
                src = target[ name ];
                copy = options[ name ];

                if ( target === copy ) {
                    continue;
                }

                if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                    ( copyIsArray = Array.isArray( copy ) ) ) ) {

                    if ( copyIsArray ) {
                        copyIsArray = false;
                        clone = src && Array.isArray( src ) ? src : [];

                    } else {
                        clone = src && jQuery.isPlainObject( src ) ? src : {};
                    }

                    target[ name ] = jQuery.extend( deep, clone, copy );

                } else if ( copy !== undefined ) {
                    target[ name ] = copy;
                }
            }
        }
    }
};
jQuery.trigger: function() {
    if ( this === safeActiveElement() && this.blur ) {
        this.blur();
        return false;
    }
};


jQuery.fn.extend( {

    trigger: function( type, data ) {
        return this.each( function() {
            jQuery.event.trigger( type, data, this );
        } );
    },
    triggerHandler: function( type, data ) {
        var elem = this[ 0 ];
        if ( elem ) {
            return jQuery.event.trigger( type, data, elem, true );
        }
    }
} );