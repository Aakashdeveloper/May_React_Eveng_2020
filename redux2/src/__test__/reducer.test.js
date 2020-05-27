import reducer from '../reducers';

describe('Reducer Testing',() => {
    it('should return inital state',() => {
        expect(JSON.stringify(reducer(undefined,{})))
        .toEqual(JSON.stringify({
            articles:{},
            gallery:{}
        }))
    })

    it('Reuturn array on action',() => {
        let state={
            articles:[],
            gallery:[]
        }

        state = reducer(state,{action:'GET_LATEST'})

        expect(state).toEqual({
            articles:[],
            gallery:[]
        })
    })
})
