Possible plans to test the usePagination hook

- Create dummy api like  [here](https://github.dev/reduxjs/redux-toolkit/blob/64a30d83384d77bcbc59231fa32aa2f1acd67020/packages/toolkit/src/query/tests/buildHooks.test.tsx#L95-L114)
  
- Create a wrapper component that calls the hook which uses the api
- The component should render a json of all values returned from hook/api
- Have a bunch of buttons to trigger the api/hook methods eg faking error, trying out reloading, back, next etc
- for each method, test for some data/text in the component

-Or consider using renderHook

_______________

- eg to test for loaded data,
currentPage should = 1,
loading should be false
data should have length, error may or may not be null - [maybe extract to another test?]

- to test for error display, should be an error text
- loading false
  
- text next/back by making sure curpent page is > or < prev value





Ideas inspired by [here](https://github.dev/reduxjs/redux-toolkit/blob/64a30d83384d77bcbc59231fa32aa2f1acd67020/packages/toolkit/src/query/tests/buildHooks.test.tsx#L95-L114)
