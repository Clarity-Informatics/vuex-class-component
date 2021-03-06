export const internalGetter = ( state :any, context :any ) => ( field :string ) => {
  const fields = field.split( "." );
  switch( fields.length ) {
    case 1: 
      return state[ fields[0] ];
    case 2:
      return state[ fields[0] ][ fields[1] ];
    case 3:
      return state[ fields[0] ][ fields[1] ][ fields[2] ];
    case 4:
      return state[ fields[0] ][ fields[1] ][ fields[2] ][ fields[3] ];
    case 5:
      return state[ fields[0] ][ fields[1] ][ fields[2] ][ fields[3] ][ fields[4] ];
    case 6:
      return state[ fields[0] ][ fields[1] ][ fields[2] ][ fields[3] ][ fields[4] ][ fields[ 5] ];
    case 7:
      return state[ fields[0] ][ fields[1] ][ fields[2] ][ fields[3] ][ fields[4] ][ fields[ 5] ][ fields[6] ];
    case 8:
      return state[ fields[0] ][ fields[1] ][ fields[2] ][ fields[3] ][ fields[4] ][ fields[ 5] ][ fields[6] ][ fields[7] ];
    case 9:
      return state[ fields[0] ][ fields[1] ][ fields[2] ][ fields[3] ][ fields[4] ][ fields[ 5] ][ fields[6] ][ fields[7] ][ fields[8] ];
    case 10:
      return state[ fields[0] ][ fields[1] ][ fields[2] ][ fields[3] ][ fields[4] ][ fields[ 5] ][ fields[6] ][ fields[7] ][ fields[8] ][ fields[9] ];
    case 11:
      return state[ fields[0] ][ fields[1] ][ fields[2] ][ fields[3] ][ fields[4] ][ fields[ 5] ][ fields[6] ][ fields[7] ][ fields[8] ][ fields[9] ][ fields[10] ];
    case 12:
      return state[ fields[0] ][ fields[1] ][ fields[2] ][ fields[3] ][ fields[4] ][ fields[ 5] ][ fields[6] ][ fields[7] ][ fields[8] ][ fields[9] ][ fields[10] ][ fields[11] ];
  }
}

