describe('Bubble Sort', function(){
    let arr = [5, 11, 3, 7, 2]
    let returnedArr = [2, 3, 5, 7, 11]
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('the length of the returned array is same as the original array', function(){
        expect( bubbleSort(arr).length).toEqual(arr.length);
    });
    it('it should return a sorted array', function(){
        expect( bubbleSort(arr)).toEqual(returnedArr);
    });
  });
