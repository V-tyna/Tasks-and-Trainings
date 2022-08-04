const LinkedList = require('../../linkedList/linkedList.js');

describe('Linked list', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.append('a').append('b').append('c');
  })

  test('should append "x" and return "a,b,c,x"', () => {
    expect(list.append('x').makeString()).toBe('a,b,c,x');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('x');
  });

  test('should append "y" and return "y,a,b,c"', () => {
    expect(list.prepend('y').makeString()).toBe('y,a,b,c');
    expect(list.head.value).toBe('y');
    expect(list.tail.value).toBe('c');
  });

  test('should find "b" in linked list "a,b,c"', () => {
    expect(list.find('b')).toEqual({'value': 'b','next': {'value': 'c','next': null}});
    expect(list.find('d')).toBe(null);
  });

  test('should find "b" in linked list "null" and return null', () => {
    expect(new LinkedList().find('b')).toBe(null);
  });

  test('should delete "b" and return "b"', () => {
    expect(list.delete('b').makeString()).toBe('b');
    expect(list.head).toEqual({'value': 'a', 'next': {'next': null, 'value': 'c'}});
    expect(list.tail.value).toBe('c');
  });

  test('should delete all "b" and return "b"', () => {
    list.append('b');
    expect(list.delete('b').makeString()).toBe('b');
    expect(list.head).toEqual({'value': 'a', 'next': {'next': null, 'value': 'c'}});
    expect(list.tail.value).toBe('c');
  });

  test('should insert to the middle "x" after "b"', () => {
    const prev = list.find('b');
    expect(list.insertAfter('x', prev).makeString()).toBe('a,b,x,c');
  });

  test('should insert to the end "x" after "b"', () => {
    const prev = list.find('c');
    expect(list.insertAfter('x', prev).makeString()).toBe('a,b,c,x');
    expect(list.tail.value).toBe('x');
  });

})