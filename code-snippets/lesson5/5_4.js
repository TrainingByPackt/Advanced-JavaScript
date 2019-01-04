function sortObjField1( field ) {
  return function ( v1, v2 ) {
    return v1[ field ] > v2[ field ];
  }
}

function sortObjField2( field, v1, v2 ) {
  return v1[ field ] > v2[ field ];
}
