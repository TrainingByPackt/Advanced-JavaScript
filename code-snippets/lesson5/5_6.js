const data  = {
  prop1: 'value1',
  objectProp: { p1: 'v1', p2: 'v2' },
  arrayProp: [ 1, 'test' , { p1: 'v1' }, [ 1, 2, 3 ] ]
};
Object.freeze( data );
Object.freeze( data.objectProp );
Object.freeze( data.arrayProp );
Object.freeze( data.arrayProp[2] );
Object.freeze( data.arrayProp[3] );
